import { FaTimes } from 'react-icons/fa';

interface MusicModalProps {
  play: any;
  pause: any;
  closebtn: any;
}

function MusicModal({ play, pause, closebtn }: MusicModalProps) {
  
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#0f172a] w-96 rounded-lg shadow-lg">
                <span onClick={closebtn} className="flex cursor-pointer hover:scale-110 duration-500  hover:text-[#65C23A] ml-[22.7rem] items-center h-6">
                    <FaTimes/>
                </span>
                <div className=' p-6'>
                    <h1 className="text-2xl font-semibold justify-center text-center mb-4">Welcome!</h1>
                    <p className="mb-4 text-center">
                    Would you like to listen to some classic <span>&#9835;</span> as you explore?
                    </p>
                    <div className="flex px-7 justify-between text-lg">
                        <button className="bg-white hover:bg-[#65C23A] hover:scale-110 duration-500 text-[#0f172a] px-10 py-2 rounded-lg" onClick={play}>
                            Yes
                        </button>
                        <button className="bg-white hover:bg-[#65C23A] hover:scale-110 duration-500 text-[#0f172a] px-10 py-2 rounded-lg" onClick={pause}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicModal;
