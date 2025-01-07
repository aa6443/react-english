import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://www.shutterstock.com/image-vector/3d-blue-download-button-icon-600nw-2223811075.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="data:image/png;base64,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" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}