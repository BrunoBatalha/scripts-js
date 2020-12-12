import fs from "fs";
import path from "path";

const dirMain: fs.Dir = fs.opendirSync('arquivos-exemplos')

while (true) {
    const dirent: fs.Dirent = dirMain.readSync()
    if (dirent === null) break
    const direntDir: fs.Dir = fs.opendirSync(path.join(dirMain.path, dirent.name))
    while (true) {
        const direntFile: fs.Dirent = direntDir.readSync()
        if (direntFile === null) break
        if (direntFile.isFile()) {
            const pathFile = path.join(dirMain.path, dirent.name, direntFile.name)
            console.log(pathFile)
            const newContent = getContentReplaced(pathFile, 'RPL_legal_RPL', 'nao', fs);
            fs.writeFileSync(pathFile, newContent)
        }
    }
}

function getContentReplaced(path: string, str: string, newString: string, fs: any): string {
    const file = fs.readFileSync(path)
    const content = file.toString()
    const regex = new RegExp(str, 'g')
    const newContent = content.replace(regex, newString)
    return newContent
}

// function getFile(dir: fs.Dirent): Buffer {

// }