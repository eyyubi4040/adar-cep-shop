import { Storage } from "@google-cloud/storage";
import fs from "fs";
import path from "path";

const KEY_FILE = "E:/PROJELER/kirsehir-tasarimci-website-main/gcp-key.json";
const BUCKET_NAME = "eycodex";
const TARGET_FOLDER = "adar-cep-shop";

async function main() {
  if (!fs.existsSync(KEY_FILE)) {
    console.error("GCP Key file bulunamadı:", KEY_FILE);
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(KEY_FILE, "utf-8"));
  const storage = new Storage({
    projectId: credentials.project_id,
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
  });

  const bucket = storage.bucket(BUCKET_NAME);
  console.log(`\n======================================================`);
  console.log(`☁️  Google Cloud Storage Yüklemesi Başlatılıyor...`);
  console.log(`📦 Bucket: ${BUCKET_NAME}`);
  console.log(`📁 Hedef Klasör: ${TARGET_FOLDER}/`);
  console.log(`======================================================\n`);

  // Collect all files to upload
  const filesToUpload: { localPath: string; remotePath: string; mimeType: string }[] = [];

  // 1. Logo
  const logoPath = "E:/projeler/adarcepshoplogo.png";
  if (fs.existsSync(logoPath)) {
    filesToUpload.push({
      localPath: logoPath,
      remotePath: `${TARGET_FOLDER}/adarcepshoplogo.png`,
      mimeType: "image/png",
    });
  }

  // 2. Zip archive
  const zipPath = "E:/projeler/adar-cep-shop/adar_cep_shop_tum_gorseller.zip";
  if (fs.existsSync(zipPath)) {
    filesToUpload.push({
      localPath: zipPath,
      remotePath: `${TARGET_FOLDER}/adar_cep_shop_tum_gorseller.zip`,
      mimeType: "application/zip",
    });
  }

  // 3. Images directory recursively
  const imagesDir = "E:/projeler/adar-cep-shop/public/images";
  function collect(dir: string) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) {
        collect(full);
      } else {
        const rel = path.relative(imagesDir, full).replace(/\\/g, "/");
        const ext = path.extname(full).toLowerCase();
        let mime = "image/jpeg";
        if (ext === ".png") mime = "image/png";
        if (ext === ".webp") mime = "image/webp";
        if (ext === ".svg") mime = "image/svg+xml";

        filesToUpload.push({
          localPath: full,
          remotePath: `${TARGET_FOLDER}/images/${rel}`,
          mimeType: mime,
        });
      }
    }
  }
  if (fs.existsSync(imagesDir)) collect(imagesDir);

  console.log(`Toplam yüklenecek dosya sayısı: ${filesToUpload.length}\n`);

  let successCount = 0;
  const uploadedUrls: { name: string; url: string }[] = [];

  for (let i = 0; i < filesToUpload.length; i++) {
    const item = filesToUpload[i];
    try {
      const file = bucket.file(item.remotePath);
      await file.save(fs.readFileSync(item.localPath), {
        resumable: false,
        contentType: item.mimeType,
        metadata: {
          cacheControl: "public, max-age=31536000",
        },
      });

      // Try making public
      try {
        await file.makePublic();
      } catch (e) {
        // Uniform bucket-level access might be on
      }

      const publicUrl = `https://storage.googleapis.com/${BUCKET_NAME}/${item.remotePath}`;
      uploadedUrls.push({ name: path.basename(item.localPath), url: publicUrl });
      successCount++;
      console.log(`[${i + 1}/${filesToUpload.length}] ✓ Yüklendi: ${item.remotePath}`);
    } catch (err: any) {
      console.error(`[${i + 1}/${filesToUpload.length}] ✗ Hata (${item.remotePath}):`, err.message);
    }
  }

  console.log(`\n======================================================`);
  console.log(`🎉 Yükleme Tamamlandı!`);
  console.log(`✅ Başarılı: ${successCount} / ${filesToUpload.length}`);
  console.log(`🔗 GCS Klasör Yolu: https://storage.googleapis.com/${BUCKET_NAME}/${TARGET_FOLDER}/`);
  console.log(`======================================================\n`);
}

main().catch(console.error);
