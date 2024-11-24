import { SiPython, SiJavascript, SiCplusplus, SiDjango, SiFastapi, SiMongodb, SiPostgresql, SiDocker, SiMicrosoftazure, SiNginx, SiCelery, SiGithubactions, SiLinux, SiGnubash, SiGit } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { DiRedis } from "react-icons/di";
import { SiFfmpeg } from "react-icons/si";


const Technology = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">
                Technologies
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <SiPython className="text-7xl text-blue-400" /> {/* Python's blue color */}
                </div>

                <div className="p-4">
                    <SiJavascript className="text-7xl text-yellow-500" /> {/* JavaScript's yellow color */}
                </div>

                <div className="p-4">
                    <SiCplusplus className="text-7xl text-pink-700" /> {/* C++'s blue shade */}
                </div>

                <div className="p-4">
                    <SiDjango className="text-7xl text-green-600" /> {/* Django's green color */}
                </div>

                <div className="p-4">
                    <SiFastapi className="text-7xl text-teal-500" /> {/* FastAPI's greenish color */}
                </div>

                <div className="p-4">
                    <SiDocker className="text-7xl text-blue-500" /> {/* Docker's blue color */}
                </div>

                <div className="p-4">
                    <SiPostgresql className="text-7xl text-sky-500" /> {/* PostgreSQL's blue */}
                </div>

                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-500" /> {/* MongoDB's green */}
                </div>

                <div className="p-4">
                    <DiRedis className="text-7xl text-red-600" /> {/* Redis's red */}
                </div>

                <div className='p-4'>
                    <SiMicrosoftazure className="text-7xl text-blue-600" /> {/* Azure's blue */}
                </div>

                <div className='p-4'>
                    <FaAws className="text-7xl text-white" /> {/* AWS's yellow */}
                </div>

                <div className='p-4'>
                    <SiNginx className="text-7xl text-green-600" /> {/* Nginx's green */}
                </div>

                <div className='p-4'>
                    <SiCelery className="text-7xl text-green-500" /> {/* Celery's green */}
                </div>

                <div className='p-4'>
                    <SiGithubactions className="text-7xl text-blue-500" /> {/* GitHub Actions' black */}
                </div>

                <div className='p-4'>
                    <SiLinux className="text-7xl text-white" /> {/* Linux's black */}
                </div>

                <div className='p-4'>
                    <SiGnubash className="text-7xl text-white" /> {/* Bash's black */}
                </div>

                <div className='p-4'>
                    <SiGit className="text-7xl text-red-600" /> {/* Git's red */}
                </div>

                <div className='p-4'>
                    <SiFfmpeg className="text-7xl text-green-500" /> {/* FFmpeg's green */}
                </div>
            </div>


        </div>
    )
};

export default Technology;