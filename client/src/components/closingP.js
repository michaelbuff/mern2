import githubLogo from "./githublogo.png"

function Closer(){
    const GithubUrl = "https://github.com/michaelbuff/mern2";

    return (
        <div >
            <p>
            This page's source code can be found on <a href={GithubUrl}>github.</a>
            <img src={githubLogo} alt="Github Logo"></img>
            </p>
        </div>
    )
}


export default Closer