import RequestInviteButton from "./RequestInviteButton";

function Hero() {
  return (
    <div className=" flex flex-col-reverse md:flex-row md:h-96">
      <div className="text-center md:text-left pt-14 pb-24 px-4 md:px-0 md:pb-0 md:pl-28">
        <h2
          className="text-primary-dark-blue font-semibold"
          style={{ fontSize: "44px" }}
        >
          Next generation digital banking
        </h2>
        <p className="text-neutral-grayish-blue py-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestInviteButton />
      </div>
      <div className="md:basis-3/4 h-80 border bg-[url('./bg-intro-mobile.svg')] md:bg-[url('./bg-intro-desktop.svg')] bg-right bg-cover"></div>
    </div>
  );
}

export default Hero;
