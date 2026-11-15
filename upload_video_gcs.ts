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
  console.log(`☁️  Google Cloud Storage Video Yüklemesi Başlatılıyor...`);
  console.log(`📦 Bucket: ${BUCKET_NAME}`);
  console.log(`📁 Hedef: ${TARGET_FOLDER}/videos/`);
  console.log(`======================================================\n`);

  const items = [
    {
      localPath: "E:/PROJELER/adar-cep-shop/public/videos/adar-magaza-tanitim.mp4",
      remotePath: `${TARGET_FOLDER}/videos/adar-magaza-tanitim.mp4`,
      mimeType: "video/mp4",
    },
    {
      localPath: "E:/PROJELER/adar-cep-shop/public/images/banners/adar-magaza-poster.jpg",
      remotePath: `${TARGET_FOLDER}/images/banners/adar-magaza-poster.jpg`,
      mimeType: "image/jpeg",
    },
  ];

  for (const item of items) {
    if (!fs.existsSync(item.localPath)) {
      console.warn(`Dosya bulunamadı: ${item.localPath}`);
      continue;
    }
    const stat = fs.statSync(item.localPath);
    console.log(`Yükleniyor (${(stat.size / 1024 / 1024).toFixed(2)} MB): ${item.remotePath}`);
    await bucket.upload(item.localPath, {
      destination: item.remotePath,
      metadata: {
        contentType: item.mimeType,
        cacheControl: "public, max-age=31536000",
      },
    });

    try {
      await bucket.file(item.remotePath).makePublic();
    } catch (e) {
      // uniform bucket access might be enabled
    }

    console.log(`✓ Başarıyla yüklendi: https://storage.googleapis.com/${BUCKET_NAME}/${item.remotePath}\n`);
  }

  console.log(`🎉 Google Cloud Storage yüklemesi tamamlandı!\n`);
}

main().catch(console.error);
