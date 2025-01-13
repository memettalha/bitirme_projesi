import whiteLogo from "../assets/Images/LOGO_Beyaz.png"
import {Link} from "react-router-dom"


interface foot{
    link:string,
    path:string,
}

const footer1: (foot[]) = [
    {link:"İletişim", path:"/Contact"},
    {link:"Hakkımızda ", path:"/About"},
    {link:"Sıkça Sorulan Sorular", path:"/SSS"},
    {link:"KVKK", path:"KVKK"},
    {link:"Çalışma İlkelerimiz", path:"ÇalışmaIlkelerimiz"},
    {link:"Satış Sözleşmesi", path:"SatışSözleşmesi"},
    {link:"Garanti ve İade Koşulları", path:"GarantiveIadeKoşulları"},
    {link:"Gerçek Müşteri Yorumları", path:"GerçekMüşteriYorumları"},
    {link:"Blog", path:"Blog"},
    ]

const footer2: (foot[]) = [
    {link:"PROTEİN", path:"Protein"},
    {link:"VİTAMİNLER", path:"Vitaminler"},
    {link:"SAĞLIK",path:"Sağlik"},
    {link:"SPOR GIDALARI", path:"SporGidalari"},
    {link:"GIDA", path:"Gida"},
    {link:"TÜM ÜRÜNLER", path:"TumUrunler"},
    ]
const footer3: (foot[]) = [
    {link:"Whey Protein", path:"WheyProtein"},
    {link:"Cream of Rice", path:"CreamofRice"},
    {link:"Creatine",path:"Creatine"},
    {link:"BCAA++", path:"BCAA++"},
    {link:"Pre-Workout", path:"Pre-Workout"},
    {link:"Fitness Paketi", path:"FitnessPaketi"},
    {link:"Collegen", path:"Collegen"},
    {link:"Günlük Vitamin Paketi", path:"GünlükVitaminPaketi"},
    {link:"ZMA", path:"ZMA"},
    ]
 

const Footer = () => {
 
    
  return (
    <div className="pt-16 bg-[#222222] hidden md:block w-full" >
        <div className="flex flex-col">
        <div className="flex flex-row md:justify-around lg:justify-between lg:w-8/12 lg:mx-auto md:px-8 lg:px-0 
         ">
        <div className="text-left">
            <img  className="mb-2 lg:w-32 lg:h-8" src={whiteLogo} alt="" />
            <ul>{footer1.map((foot) => <li className="text-gray-400 leading-6 text-xs"><Link to={foot.path}>{foot.link}</Link></li>)}</ul>
        </div>
        <div className="text-left">
            <h1 className="text-white mb-2 text-lg">Kategoriler</h1>
            <ul className="">{footer2.map((foot) => <li className="text-gray-400 leading-6 text-xs" ><Link to="">{foot.link}</Link></li>)}</ul>
        </div>
        <div className="text-left ">
            <Link to={""} className="mb-2 text-white text-lg">Popüler Ürünler</Link>
            <ul>{footer3.map((foot) => <li className="text-gray-400 leading-6 text-xs"><Link to="">{foot.link}</Link></li>)}</ul>
         </div>
      </div>
      <div className="flex justify-start md:justify-between lg:justify-around md:pl-8 lg:pl-0 mt-24">
      
      <div></div>
      <div></div>
      <div className="flex flex-row md:justify-between lg:w-8/12 lg:mx-auto
         ">
        <span className="text-xs text-gray-400">Copyright © - Tüm Hakları Saklıdır.</span>
      </div>
      <div className="pb-3">a</div>
      </div>
      </div>
    </div>
  )
}

export default Footer
