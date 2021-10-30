import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const questionsDirectory = path.join(process.cwd(),'questions')

export function getSortedQuestionsData(){
    const fileNames = fs.readdirSync(questionsDirectory)
    const allQuestions = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/,'')
        const fullPath = path.join(questionsDirectory,fileName)
        const fileContents = fs.readFileSync(fullPath,'utf-8')
        const matterResult = matter(fileContents)
        return {
            id,
            ...matterResult.data,
            fileContents
        }
    })

    return allQuestions.sort(({date:a},{date:b}) => {
        if (a < b) {
            return 1
          } else if (a > b) {
            return -1
          } else {
            return 0
          }
    })
}