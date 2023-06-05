import { signIn } from "next-auth/react"

const Login = () => {

    return (<>
        <div className="flex absolute h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.7)] items-center justify-center text-white" onClick={()=>{console.log("Hppy")}}>
            <div className="w-[35%] h-3/4 border flex justify-center items-center bg-[#c8b8d6] rounded">
                <button className="bg-[#9333EA] rounded h-10 w-52" onClick={()=>signIn("google")}>Sign In with Google</button>
            </div>
        </div>
    </>)

}

export default Login;
