import svgPaths from "./svg-y4umkjmbir";
import imgBekahAllmarkQt0OgPnhGwyUnsplash1 from "figma:asset/be9b13389dfc28e8a32b5f2a2c8cb916f8351abf.png";
import imgFabianBachliA2Zf3FGbdFqUnsplash1 from "figma:asset/f86398114269db65eff705d2ea34384c1ae42e0b.png";
import imgAmeliaBrownYWNiCZw5YpsUnsplash1 from "figma:asset/002ef2bcb93b666147811f67c488a658712aebe8.png";
import imgSerhiiTyaglovskyLCdhTocNrt4Unsplash1 from "figma:asset/c4320a558181887baf8298fb59c70dbe4ff52a99.png";
import imgMarjanBlanMarjanblanWUgWd28H3EUnsplash1 from "figma:asset/748ff766c25a880080fcbe8f5c27264e91261ce4.png";

function Grid() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['General_Sans:Semibold',_sans-serif] gap-6 items-center justify-start leading-[0] not-italic overflow-clip p-0 relative shrink-0 text-[#ffffff] text-[22px] text-left text-nowrap uppercase w-full"
      data-name="grid"
    >
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Newsletter+++
        </p>
      </div>
    </div>
  );
}

function Newsticker() {
  return (
    <div className="relative shrink-0 w-full" data-name="newsticker">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pl-5 pr-0 py-5 relative w-full">
          <Grid />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start px-[15px] py-0 relative shrink-0 w-[309px]"
      data-name="input"
    >
      <div className="font-['General_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] text-left text-nowrap">
        <p className="block leading-[1.8] whitespace-pre">Email</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-[50px] items-center justify-center px-6 py-1 relative shrink-0"
      data-name="button"
    >
      <div className="font-['General_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap uppercase">
        <p className="block leading-[normal] whitespace-pre">Sign Up</p>
      </div>
    </div>
  );
}

function Grid1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-end ml-[1074.76px] mt-[81px] p-0 relative w-[445.243px]"
      data-name="grid"
    >
      <div className="flex flex-row items-center self-stretch">
        <Input />
      </div>
      <Button />
    </div>
  );
}

function Newsletter() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="newsletter"
    >
      <div className="[grid-area:1_/_1] font-['General_Sans:Semibold',_sans-serif] ml-0 mt-0 not-italic relative text-[#f9f9f9] text-[80px] text-left uppercase w-[790.421px]">
        <p className="block leading-[1.1]">Design News to your inbox</p>
      </div>
      <Grid1 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['General_Sans:Regular',_sans-serif] gap-3 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap w-full"
      data-name="nav"
    >
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">Art</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">Design</p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Architecture
        </p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="column"
    >
      <div
        className="bg-[rgba(255,255,255,0.15)] h-px shrink-0 w-full"
        data-name="line"
      />
      <Nav />
    </div>
  );
}

function Nav1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['General_Sans:Regular',_sans-serif] gap-3 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
      data-name="nav"
    >
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Magazine
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Podcast
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Authors
        </p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="column"
    >
      <div
        className="bg-[rgba(255,255,255,0.15)] h-px shrink-0 w-full"
        data-name="line"
      />
      <Nav1 />
    </div>
  );
}

function Nav2() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['General_Sans:Regular',_sans-serif] gap-3 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap"
      data-name="nav"
    >
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Styleguide
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Licensing
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[1.8] text-nowrap whitespace-pre">
          Changelog
        </p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="column"
    >
      <div
        className="bg-[rgba(255,255,255,0.15)] h-px shrink-0 w-full"
        data-name="line"
      />
      <Nav2 />
    </div>
  );
}

function Grid2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-16 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="grid"
    >
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Grid3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[300px] items-start justify-start p-0 relative shrink-0 w-[1518.92px]"
      data-name="grid"
    >
      <div
        className="h-[17.952px] relative shrink-0 w-[208.921px]"
        data-name="Fyrre Magazine"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 209 18"
        >
          <g id="Fyrre Magazine">
            <path d={svgPaths.p22c3fb00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p9358500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e686200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p15648100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2575ce80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p367b3e40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31d9cc80} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf0d92f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ae05400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16b9c500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39c5ea00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14014b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p202fcc00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <Grid2 />
    </div>
  );
}

function RiInstagramLine() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:instagram-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:instagram-line">
          <path
            d={svgPaths.p1305e900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RiTwitterFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:twitter-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:twitter-fill">
          <path
            d={svgPaths.p3fd3a000}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RiYoutubeFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:youtube-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:youtube-fill">
          <path d={svgPaths.pdb0b000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiRssFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:rss-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:rss-fill">
          <path d={svgPaths.p8693780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Social() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="social"
    >
      <RiInstagramLine />
      <RiTwitterFill />
      <RiYoutubeFill />
      <RiRssFill />
    </div>
  );
}

function Grid4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[1520px]"
      data-name="grid"
    >
      <div className="font-['General_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-[389px]">
        <p className="block leading-[1.6] whitespace-pre-wrap">{`© Made by Pawel Gola -  Powered by Webflow`}</p>
      </div>
      <Social />
    </div>
  );
}

function FooterBottom() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-24 items-start justify-start p-0 relative shrink-0"
      data-name="footer bottom"
    >
      <Grid3 />
      <Grid4 />
    </div>
  );
}

function Grid5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-32 items-center justify-start pb-0 pt-32 px-0 relative shrink-0 w-full"
      data-name="grid"
    >
      <Newsletter />
      <FooterBottom />
    </div>
  );
}

function Grid6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-0 p-0 top-0 w-[1680px]"
      data-name="grid"
    >
      <Newsticker />
      <Grid5 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute bg-[#000000] h-[821px] left-0 overflow-clip top-[1976px] w-[1680px]"
      data-name="footer"
    >
      <Grid6 />
    </div>
  );
}

function RiArrowRightLine() {
  return (
    <div className="relative size-6" data-name="ri:arrow-right-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ri:arrow-right-line">
          <path
            d={svgPaths.p32c88600}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ButtonText() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="button-text"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <RiArrowRightLine />
        </div>
      </div>
      <div className="font-['General_Sans:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap uppercase">
        <p className="block leading-[normal] whitespace-pre">Go Back</p>
      </div>
    </div>
  );
}

function Grid7() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-between left-20 p-0 top-[150px] w-[1520px]"
      data-name="grid"
    >
      <ButtonText />
      <div className="font-['General_Sans:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-left text-nowrap uppercase">
        <p className="block leading-[1.1] whitespace-pre">Author</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div
      className="overflow-clip relative rounded-[1000px] shrink-0 size-[350px]"
      data-name="image"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[556px] left-[-43px] top-[-112px] w-[445px]"
        data-name="bekah-allmark-Qt0ogPnhGWY-unsplash 1"
        style={{
          backgroundImage: `url('${imgBekahAllmarkQt0OgPnhGwyUnsplash1}')`,
        }}
      />
    </div>
  );
}

function RiInstagramLine1() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:instagram-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:instagram-line">
          <path
            d={svgPaths.p1305e900}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RiTwitterFill1() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:twitter-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:twitter-fill">
          <path
            d={svgPaths.p3fd3a000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RiYoutubeFill1() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:youtube-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:youtube-fill">
          <path d={svgPaths.pdb0b000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Social1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="social"
    >
      <RiInstagramLine1 />
      <RiTwitterFill1 />
      <RiYoutubeFill1 />
    </div>
  );
}

function Grid8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left uppercase w-[198px]">
        <p className="block leading-[normal]">Follow</p>
      </div>
      <Social1 />
    </div>
  );
}

function Grid9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[350px]"
      data-name="grid"
    >
      <div className="bg-[#000000] h-px shrink-0 w-full" data-name="line" />
      <Grid8 />
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-0 relative shrink-0 w-[350px]"
      data-name="sidebar"
    >
      <Image />
      <Grid9 />
    </div>
  );
}

function Grid10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0 text-[104px] uppercase w-full">
        <p className="block leading-[1.1]">Louise Jensen</p>
      </div>
      <div className="font-['General_Sans:Medium',_sans-serif] relative shrink-0 text-[22px] w-full">
        <p className="block leading-[1.8]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
          felis bibendum ut. Porttitor leo a diam.
        </p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-12 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-[#000000] text-left"
      data-name="content"
    >
      <Grid10 />
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0 text-[16px] w-[754px]">
        <p className="block leading-[1.8]">
          Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor
          morbi non arcu risus quis varius. Posuere ac ut consequat semper
          viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique
          risus nec feugiat in fermentum posuere urna nec. Tempus quam
          pellentesque nec nam aliquam sem et. Convallis a cras semper auctor
          neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus
          egestas tellus rutrum tellus pellentesque. Sed egestas egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit
          amet porttitor eget dolor morbi non arcu risus. Justo eget magna
          fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis
          lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
        </p>
      </div>
    </div>
  );
}

function Grid11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-24 items-start justify-start left-60 p-0 top-[281px] w-[1200px]"
      data-name="grid"
    >
      <Sidebar />
      <Content />
    </div>
  );
}

function Grid12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-12 items-start justify-center p-0 relative shrink-0"
      data-name="grid"
    >
      <div className="bg-[#000000] h-px shrink-0 w-[1520px]" data-name="line" />
      <div className="basis-0 font-['General_Sans:Semibold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[72px] text-left w-[1520px]">
        <p className="block leading-[1.1]">Articles by Louise Jensen</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[150px]"
      data-name="image"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[246px] left-[-4px] top-[-48px] w-[164px]"
        data-name="fabian-bachli-A2Zf3fGbdFQ-unsplash 1"
        style={{
          backgroundImage: `url('${imgFabianBachliA2Zf3FGbdFqUnsplash1}')`,
        }}
      />
    </div>
  );
}

function Grid13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Date</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          16. March 2022
        </p>
      </div>
    </div>
  );
}

function Grid14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Read</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">10 Min</p>
      </div>
    </div>
  );
}

function Meta() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-center justify-end p-0 relative shrink-0"
      data-name="meta"
    >
      <Grid13 />
      <Grid14 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <div
        className="font-['General_Sans:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.2]">The best art museums</p>
      </div>
      <Meta />
    </div>
  );
}

function Article() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start mr-[-1px] p-[32px] relative shrink-0 w-[760.5px]"
      data-name="article"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-0 pointer-events-none"
      />
      <Image1 />
      <Content1 />
    </div>
  );
}

function Image2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[150px]"
      data-name="image"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat left-[-2.5px] size-[157px] top-[-4px]"
        data-name="amelia-brown-yWNiCZw5yps-unsplash 1"
        style={{
          backgroundImage: `url('${imgAmeliaBrownYWNiCZw5YpsUnsplash1}')`,
        }}
      />
    </div>
  );
}

function Grid15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Date</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          16. March 2022
        </p>
      </div>
    </div>
  );
}

function Grid16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Read</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">10 Min</p>
      </div>
    </div>
  );
}

function Meta1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-center justify-end p-0 relative shrink-0"
      data-name="meta"
    >
      <Grid15 />
      <Grid16 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <div
        className="font-['General_Sans:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.2]">An inde­struc­tible hope</p>
      </div>
      <Meta1 />
    </div>
  );
}

function Article1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start mr-[-1px] p-[32px] relative shrink-0 w-[760.5px]"
      data-name="article"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-0 pointer-events-none"
      />
      <Image2 />
      <Content2 />
    </div>
  );
}

function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start mb-[-1px] pl-0 pr-px py-0 relative shrink-0 w-full"
      data-name="row"
    >
      <Article />
      <Article1 />
    </div>
  );
}

function Image3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[150px]"
      data-name="image"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[217px] left-[-9px] top-[-9px] w-[162px]"
        data-name="serhii-tyaglovsky-lCdhTOCNrt4-unsplash 1"
        style={{
          backgroundImage: `url('${imgSerhiiTyaglovskyLCdhTocNrt4Unsplash1}')`,
        }}
      />
    </div>
  );
}

function Grid17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Date</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          16. March 2022
        </p>
      </div>
    </div>
  );
}

function Grid18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Read</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">10 Min</p>
      </div>
    </div>
  );
}

function Meta2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-center justify-end p-0 relative shrink-0"
      data-name="meta"
    >
      <Grid17 />
      <Grid18 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <div
        className="font-['General_Sans:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.2]">The chains of our lives</p>
      </div>
      <Meta2 />
    </div>
  );
}

function Article2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start mr-[-1px] p-[32px] relative shrink-0 w-[760.5px]"
      data-name="article"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-0 pointer-events-none"
      />
      <Image3 />
      <Content3 />
    </div>
  );
}

function Image4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[150px]"
      data-name="image"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-64 left-[-3.5px] top-[-35px] w-[170px]"
        data-name="marjan-blan-marjanblan-wUGWd28H-3E-unsplash 1"
        style={{
          backgroundImage: `url('${imgMarjanBlanMarjanblanWUgWd28H3EUnsplash1}')`,
        }}
      />
    </div>
  );
}

function Grid19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Date</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">
          16. March 2022
        </p>
      </div>
    </div>
  );
}

function Grid20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
      data-name="grid"
    >
      <div className="font-['General_Sans:Semibold',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">Read</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] relative shrink-0">
        <p className="block leading-[1.6] text-nowrap whitespace-pre">10 Min</p>
      </div>
    </div>
  );
}

function Meta3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-8 items-center justify-end p-0 relative shrink-0"
      data-name="meta"
    >
      <Grid19 />
      <Grid20 />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="content"
    >
      <div
        className="font-['General_Sans:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[32px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.2]">Keep on smiling</p>
      </div>
      <Meta3 />
    </div>
  );
}

function Article3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-center justify-start mr-[-1px] p-[32px] relative shrink-0 w-[760.5px]"
      data-name="article"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#000000] border-solid inset-0 pointer-events-none"
      />
      <Image4 />
      <Content4 />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start mb-[-1px] pl-0 pr-px py-0 relative shrink-0 w-full"
      data-name="row"
    >
      <Article2 />
      <Article3 />
    </div>
  );
}

function Articles() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="articles"
    >
      <Row />
      <Row1 />
    </div>
  );
}

function Articles1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-24 items-start justify-start left-20 p-0 top-[1133px]"
      data-name="articles"
    >
      <Grid12 />
      <Articles />
    </div>
  );
}

function RiInstagramLine2() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:instagram-line">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:instagram-line">
          <path
            d={svgPaths.p1305e900}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RiTwitterFill2() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:twitter-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:twitter-fill">
          <path
            d={svgPaths.p3fd3a000}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RiYoutubeFill2() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:youtube-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:youtube-fill">
          <path d={svgPaths.pdb0b000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiRssFill1() {
  return (
    <div className="relative shrink-0 size-5" data-name="ri:rss-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="ri:rss-fill">
          <path d={svgPaths.p8693780} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Social2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="social"
    >
      <RiInstagramLine2 />
      <RiTwitterFill2 />
      <RiYoutubeFill2 />
      <RiRssFill1 />
    </div>
  );
}

function Column3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="column"
    >
      <div className="font-['General_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Magazine</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Authors</p>
      </div>
      <div className="font-['General_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Podcast</p>
      </div>
      <div className="bg-[#000000] h-px shrink-0 w-[15px]" data-name="line" />
      <Social2 />
    </div>
  );
}

function Grid21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[520px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="grid"
    >
      <div
        className="h-[17.952px] relative shrink-0 w-[209.17px]"
        data-name="Fyrre Magazine"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 210 18"
        >
          <g id="Fyrre Magazine">
            <path d={svgPaths.p4eabf00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p26ae9a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p397da200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p25904700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p16c82d80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2c306d00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2d036700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13001400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1e880000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1525e280} fill="var(--fill-0, black)" />
            <path d={svgPaths.p17e36d00} fill="var(--fill-0, black)" />
            <path d={svgPaths.pe777100} fill="var(--fill-0, black)" />
            <path d={svgPaths.pa522600} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <Column3 />
    </div>
  );
}

function Grid22() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="grid"
    >
      <Grid21 />
      <div className="bg-[#000000] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-start justify-start left-20 p-0 top-16 w-[1520px]"
      data-name="header"
    >
      <Grid22 />
    </div>
  );
}

export default function AuthorPost() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Author Post">
      <Footer />
      <Grid7 />
      <Grid11 />
      <Articles1 />
      <Header />
    </div>
  );
}