import Image from "next/image";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import Media1 from "../../../public/assets/images/media1.png";
import Media2 from "../../../public/assets/images/media2.png";
import Media3 from "../../../public/assets/images/media3.png";
import Media4 from "../../../public/assets/images/media4.png";
import Media5 from "../../../public/assets/images/media5.png";
import Media6 from "../../../public/assets/images/media6.png";
import Media7 from "../../../public/assets/images/media7.png";
import Media8 from "../../../public/assets/images/media8.png";

export default function MediaCoverageComponent () {

  const data = [
    { icon: Media1 },
    { icon: Media2 },
    { icon: Media3 },
    { icon: Media4 },
    { icon: Media5 },
    { icon: Media6 },
    { icon: Media7 },
    { icon: Media8 },
  ]

  return (
    <>
      <div className="media-coverage-left">
        <h1 className='accomplishment-right-title'>Media coverage</h1>
        <h1 className='accomplishment-right-description'>Captured, covered, and reflected our proud moments in their stories.</h1>
        <ButtonWithIcon btnText={ `Explore` } />
      </div>
      <div className="media-coverage-right">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          { data.map((item, index) => (
            <div key={ `media-${index}-key` } className="accomplishment-card">
              <Image src={ item.icon } alt="..." width={ undefined } height={ undefined } />
            </div>
          )) }
        </div>
      </div>
    </>
  );
}