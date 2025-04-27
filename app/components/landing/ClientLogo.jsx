import Image from "next/image";


const ClientLogo = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 container mx-auto">
            <div>
                 <Image
                                className="w-full"
                                src="https://steadfast.com.bd/landing-page/asset/images/partner_img/sm_ghor.png"
                                width={600}
                                height={500}
                                alt="navimage"
                              />
            </div>
        </div>
    );
};

export default ClientLogo;