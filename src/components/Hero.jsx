import RequestInviteButton from "./RequestInviteButton";

function Hero() {
  return (
    <div className=" flex h-96">
      <div className="pl-28 pt-14">
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
      <div className="basis-3/4 bg-[url('./bg-intro-desktop.svg')] bg-right bg-cover"></div>
    </div>
  );
}

export default Hero;
