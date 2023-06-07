import {useAuthContext} from '../hooks/auth/useAuthContext'
import {useState} from 'react'

const Profile = () => {
    const {user} = useAuthContext();
    const [birth, setBirth] = useState(user.birth)
    const [city, setCity] = useState(user.city.name)
    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)

    return (
        <>
            <section className=' body-font w-screen my-8 text-black flex'>
                <div className='container px-5 mx-auto flex flex-col'>
                    {/* Judul Aplikasi */}
                    <div className='mb-5'>
                        <p className='title-font font-medium text-4xl mb-4'>
                            Hi {username}
                        </p>
                    </div>
                    <div className="w-full flex flex-row justify-start gap-6">
                        <div className='bg-neutral-300 rounded-lg py-8 px-8 pr-36 flex flex-col'>
                            <div className="mt-3">
                                <p>Nama :</p>
                                <p>{name}</p>
                            </div>
                            <div className="mt-3">
                                <p>Email :</p>
                                <p>{email}</p>
                            </div>
                            <div className="mt-3">
                                <p>Lokasi :</p>
                                <p>{city}</p>
                            </div>
                            <div className="mt-3">
                                <p>Birth Date :</p>
                                <p>{birth}</p>
                            </div>
                            <div className="mt-12">
                                <button>
                                    <p
                                        className="bg-blue-700 text-white px-4 py-2"
                                    >Manage Akun</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;