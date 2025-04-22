import React from "react";

function ProgressBar({
    range="80",
    name,
    number
}
) {

    return (
        <>
            <div className="relative py-2">
                <div className=" text-[#009e66] absolute top-[10px]">{name}</div>
                <span className={`inline-block mb-2 ${range} py-0.5 px-1.5 bg-[#009e66]/30 border border-[#009e66]/70 text-xs font-medium text-[#009e66] rounded-lg`}>{number}</span>
                <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#009e66] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: number }}></div>
                </div>
            </div>
        </>
    )

}

export default ProgressBar;