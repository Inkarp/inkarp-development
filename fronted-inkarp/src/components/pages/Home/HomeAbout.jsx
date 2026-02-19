import Logo from "/inkarp.png";

export default function HomeVertcials() {
    const lines = Array.from({ length: 4 });
    return (
        <section className="h-screen w-[98%] mx-auto flex items-center justify-center">

            {/* Outer Circle */}
            <div className="relative w-[600px] h-[600px] rounded-full border-4 border-[#BE0010]">

                {lines.map((_, index) => (
                    <span
                        key={index}
                        className="absolute w-[2px] h-full bg-gray-200 left-1/2 top-0 origin-center"
                        style={{
                            transform: `rotate(${index * 90}deg) translateX(-50%)`,
                        }}
                    />
                ))}

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center ">
                    <div className="w-[250px] h-[250px] rounded-full bg-white shadow-md flex items-center justify-center">
                        <img
                            src={Logo}
                            alt="Inkarp Logo"
                            className="w-[220px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* TOP QUADRANT */}
                <div className="absolute top-[90px] right-40 -translate-x-2/3 text-center w-[220px]">
                    <h1 className="text-3xl">36500+</h1>
                    <h3 className="text-lg font-bold text-[#BE0010]">Customers</h3>
                    <p className="text-sm text-black/70 mt-1">
                        Pharma, biotech, diagnostics & academia
                    </p>
                </div>

                {/* RIGHT QUADRANT */}
                <div className="absolute right-[40px] top-6/8 -translate-y-2/3 text-center w-[220px]">
                    <h1 className="text-3xl">50+</h1>
                    <h3 className="text-lg font-bold text-[#BE0010]">Brands</h3>
                    <p className="text-sm text-black/70 mt-1">
                        50+ global scientific partners
                    </p>
                </div>

                {/* BOTTOM QUADRANT */}
                <div className="absolute top-1/4 left-5/7 -translate-x-1/2 text-center w-[220px]">
                    <h1 className="text-3xl">10+</h1>
                    <h3 className="text-lg font-bold text-[#BE0010]">Awards</h3>
                    <p className="text-sm text-black/70 mt-1">
                        Industry recognition & excellence
                    </p>
                </div>

                {/* LEFT QUADRANT */}
                <div className="absolute  left-[40px] top-5/7 -translate-y-1/2 text-center w-[220px]">
                    <h1 className="text-3xl">15+</h1>
                    <h3 className="text-lg font-bold text-[#BE0010]">Branches</h3>
                    <p className="text-sm text-black/70 mt-1">
                        Pan-India service & support network
                    </p>
                </div>

            </div>
        </section>
    );
}
