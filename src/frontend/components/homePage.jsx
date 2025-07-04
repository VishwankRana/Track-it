import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div className="parentHomePageDiv ">
                <div className="homePageDiv flex justify-center items-center flex-col h-screen">
                    <div className="logoDiv text-white font-mono text-8xl">
                        Track it.
                    </div>
                    <div className="text-white font-serif text-3xl mt-3">Welcome to Track it</div>

                    <div className="buttonDiv w-full flex justify-end">
                        <Link to="/trackit/transactions">
                            <button className="text-white bg-[#FC7753] hover:bg-[#fc7853c2] w-32 h-12 cursor-pointer text-lg rounded-3xl mr-110 mt-5">Get Started</button>
                        </Link>
                    </div>

                </div >

            </div >
        </>
    )
}