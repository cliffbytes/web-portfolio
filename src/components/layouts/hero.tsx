import Image from "next/image";
// import VoxelBanner from "./voxel-banner";
import VoxelBannerRotate from "./voxel-banner-rotate";

export default function Hero() {
  return (
    <section className="pt-32">
      <div className="container">
        <div className="">
          {/* <VoxelBanner
            src="/images/about-me/mask.glb"
            className="w-full h-72"
          /> */}
          <VoxelBannerRotate
            src="/images/about-me/mask.glb"
            className="w-full h-72"
          />
          <div className="">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between max-w-3xl mx-auto gap-6 px-4 sm:px-7 pt-8 pb-8 sm:pb-12">
              <div className="flex flex-row items-center gap-6">
                {/* <div className="relative shrink-0">
                  <Image
                    src={"/images/hero-sec/profile.jpg"}
                    alt="user-img"
                    width={142}
                    height={142}
                    className="rounded-full"
                  />
                  <span className="absolute bottom-2 right-3 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full" />
                </div> */}
                <div className="flex flex-col gap-2 sm:gap-3 items-start">
                  <h1 className="italic font-sans font-bold antialiased">
                    Alexandre Michael
                  </h1>
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/images/hero-sec/42_Logo.svg"}
                      alt=""
                      width={42}
                      height={1}
                      className="invert-0 dark:invert"
                    />
                    <h5 className="text-muted-foreground font-normal">
                      Full-Stack Software Developer
                    </h5>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🇧🇪</span>
                    <p className="text-foreground">Brussels, BE</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* GitHub Icon */}
                {/* <Link
                  href={"https://github.com/cliffbytes"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                  })}
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link> */}

                {/* Mail Icon */}
                {/* <Button variant={"outline"} size={"icon"}>
                  <Mail />
                </Button> */}

                {/* Download CV Button */}
                {/* <Button variant={"outline"} size={"default"}>
                  Download CV
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
