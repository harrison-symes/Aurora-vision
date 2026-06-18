const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT_DIR = process.argv[2] || "./src/assets";
const QUALITY = 85;

async function findPngFiles(dir) {
    const entries = await fs.promises.readdir(dir, {
        withFileTypes: true,
    });

    let files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...await findPngFiles(fullPath));
        } else if (entry.isFile() && /\.png$/i.test(entry.name)) {
            files.push(fullPath);
        }
    }

    return files;
}

async function convertFile(pngPath) {
    const webpPath = pngPath.replace(/\.png$/i, ".webp");

    try {
        await sharp(pngPath)
            .webp({
                quality: QUALITY,
            })
            .toFile(webpPath);

        console.log(`✓ ${webpPath}`);
    } catch (err) {
        console.error(`✗ Failed: ${pngPath}`);
        console.error(err);
    }
}

async function main() {
    const pngFiles = await findPngFiles(ROOT_DIR);

    console.log(`Found ${pngFiles.length} PNG files`);

    await Promise.all(
        pngFiles.map(convertFile)
    );

    console.log("Done!");
}

main().catch(console.error);