'use client'

import SelectTypeOfDwellingModal from '@/src/app/components/modals/SelectTypeOfDwelling'
import SelectNumberOfResidents from '@/src/app/components/modals/SelectNumberOfResidents'
import SelectYouAreBookingFor from '@/src/app/components/modals/SelectYouAreBookingFor'
import HouseCard from '@/src/app/components/HouseCard'

export default function Home() {
    return (
        <div>
            <div className="flex gap-6 border-b-[1px] border-border_color_grey pb-4 mb-6">
                <div className="bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 relative">
                    <label
                        htmlFor="search_city_name"
                        className="cursor-pointer default-hover-active"
                    >
                        <svg
                            className=""
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9848 16.2575C13.6175 17.3481 11.8849 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8849 17.3481 13.6175 16.2576 14.9847L21.6364 20.3636C21.9879 20.7151 21.9879 21.2849 21.6364 21.6364C21.285 21.9879 20.7151 21.9879 20.3637 21.6364L14.9848 16.2575ZM16.2 10C16.2 13.4242 13.4242 16.2 10 16.2C6.57583 16.2 3.8 13.4242 3.8 10C3.8 6.57583 6.57583 3.8 10 3.8C13.4242 3.8 16.2 6.57583 16.2 10Z"
                                fill="#757575"
                            />
                        </svg>
                    </label>

                    <input
                        type="text"
                        id="search_city_name"
                        className="w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey"
                        placeholder="Enter the city name"
                        onFocus={() => ''}
                    />

                    <div className="absolute flex items-center h-full right-4 top-0 bottom-0">
                        <button
                            className="border-l border-white/10 pl-4 h-[30px] default-hover-active"
                            type="button"
                            // onClick={handleClearClick} // Clear the input when clicked
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.00059 10.8997C6.15661 10.8997 4.61153 9.61999 4.20506 7.90022L3.00059 7.90022C2.50353 7.90022 2.10059 7.49728 2.10059 7.00022C2.10059 6.50316 2.50353 6.10022 3.00059 6.10022L4.20483 6.10022C4.61095 4.37995 6.15626 3.09973 8.00059 3.09973C9.84491 3.09973 11.3902 4.37995 11.7963 6.10022H21.0006C21.4976 6.10022 21.9006 6.50316 21.9006 7.00022C21.9006 7.49728 21.4976 7.90022 21.0006 7.90022H11.7961C11.3896 9.61999 9.84456 10.8997 8.00059 10.8997ZM8.00059 9.09973C9.16038 9.09973 10.1006 8.15953 10.1006 6.99973C10.1006 5.83993 9.16038 4.89973 8.00059 4.89973C6.84079 4.89973 5.90058 5.83993 5.90059 6.99973C5.90059 8.15953 6.84079 9.09973 8.00059 9.09973Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.2049 16.1002C12.6112 14.3802 14.1564 13.1002 16.0006 13.1002C17.8447 13.1002 19.3899 14.3802 19.7962 16.1002L21.0006 16.1002C21.4976 16.1002 21.9006 16.5032 21.9006 17.0002C21.9006 17.4973 21.4976 17.9002 21.0006 17.9002L19.7962 17.9002C19.3899 19.6202 17.8447 20.9002 16.0006 20.9002C14.1564 20.9002 12.6112 19.6202 12.2049 17.9002H3.00059C2.50353 17.9002 2.10059 17.4973 2.10059 17.0002C2.10059 16.5032 2.50353 16.1002 3.00059 16.1002H12.2049ZM18.1006 17.0002C18.1006 18.16 17.1604 19.1002 16.0006 19.1002C14.8408 19.1002 13.9006 18.16 13.9006 17.0002C13.9006 15.8404 14.8408 14.9002 16.0006 14.9002C17.1604 14.9002 18.1006 15.8404 18.1006 17.0002Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <button className="default-hover-active">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.9992 11.4386V10.8045C16.9992 7.32261 14.3132 4.5 11 4.5C7.68672 4.5 5.00077 7.32261 5.00077 10.8045V11.4386C5.00077 12.1997 4.78642 12.9436 4.38471 13.5769L3.40032 15.1285C2.50117 16.5459 3.1876 18.4724 4.75143 18.9206C8.84243 20.0931 13.1576 20.0931 17.2485 18.9206C18.8124 18.4724 19.4988 16.5459 18.5996 15.1285L17.6153 13.5769C17.2136 12.9436 16.9992 12.1997 16.9992 11.4386Z"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <path
                            d="M7 19.8C7.58225 21.3731 9.1533 22.5 11 22.5C12.8467 22.5 14.4178 21.3731 15 19.8"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="mb-6">
                <h2 className="text-lg mb-3">Enter selection data</h2>
                <SelectTypeOfDwellingModal />
                <SelectYouAreBookingFor />
                <SelectNumberOfResidents />

                <button className="gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active">
                    Apply
                </button>
            </div>
            {/* {first && <SearchCity onClose={() => setfirst(false)} />} */}



            <main>
                <h2 className="mb-4 text-lg font-medium">Featured</h2>

                <div className='grid grid-cols-1'>
                    {[...Array(3)].map((_, index) => (
                        <HouseCard key={index}/>
                    ))}
                </div>
            </main>
        </div>
    )
}
