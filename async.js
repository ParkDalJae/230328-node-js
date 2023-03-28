const fs = requeir('fs').promise
//filesystem 모듈을  promise 방식으로  사용하기 위해 속성을 따로 설정할 수 있다.
//동기 vs 비동기 처리(콜백함수)에 대한 부분을 상당한 수준으로 편리하게 제어할 수 있다.

// acync라는 생소한 키워드를 Promise 문법으로 처리하면 다음과 같다
// 아래의 함수는 promise 문법으로 처리했다. 모듈로 불러오는 방식 때문에 실행되지는 않음.
function promiseWriteMomeToFile(memoTitle,memo){
    return new Promise((resolve,reject)=>{
        fs.appendFile(`${memoTitle}.txt`,`${memo}`,(err)=>{
            if(err){
                reject(err);
            }else {
                resolve();
            }
        })
    })
}
//아래의 함수는 async/await 문법으로 보다 간결하게 처리했다.
async function writeMemoToFile(memoTitle,memo){
    if(typeof memoTitle === "string" && typeof memo ==="string"){
        await fs.appendFile(`${memoTitle}.txt`,`${memo}`)
        console.log('appendFile 메서드의 특징 때문에 반복해서 실행ㅎ아면 해당 파일 안에 내용이 추가(덧붙이기)된다.')
    }
}
// 위 두개의 함수는 동일한 기능을 ㅅ ㅜ해ㅐㅇ한다.

async function readMemosFromFile(memoTitle){
    const data = await fs.readFile(`${memoTitle}.txt`,`utf-8`)
    console.log("메모 내용 조회하기")
    console.log(data)
}

//메모 추가
writeMemoToFile("test","이게 메모장 앱이다!")
//메모  데이터 콘솔로 확인하기
readMemosFromFile("test")
