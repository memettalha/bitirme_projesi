import whiteLogo from "../assets/Images/LOGO_Beyaz.png"
import {Link} from "react-router-dom"


interface foot{
    name:string,
    path:string,
}

const footer1: (foot[]) = [
    {name:"İletişim", path:"/Contact"},
    {name:"Hakkımızda ", path:"/About"},
    {name:"Sıkça Sorulan Sorular", path:"/SSS"},
    {name:"KVKK", path:"KVKK"},
    {name:"Çalışma İlkelerimiz", path:"ÇalışmaIlkelerimiz"},
    {name:"Satış Sözleşmesi", path:"SatışSözleşmesi"},
    {name:"Garanti ve İade Koşulları", path:"GarantiveIadeKoşulları"},
    {name:"Gerçek Müşteri Yorumları", path:"GerçekMüşteriYorumları"},
    {name:"Blog", path:"Blog"},
    ]

const footer2: (foot[]) = [
    {name:"PROTEİN", path:"Protein"},
    {name:"VİTAMİNLER", path:"Vitaminler"},
    {name:"SAĞLIK",path:"Sağlik"},
    {name:"SPOR GIDALARI", path:"SporGidalari"},
    {name:"GIDA", path:"Gida"},
    {name:"TÜM ÜRÜNLER", path:"TumUrunler"},
    ]
const footer3: (foot[]) = [
    {name:"Whey Protein", path:"WheyProtein"},
    {name:"Cream of Rice", path:"CreamofRice"},
    {name:"Creatine",path:"Creatine"},
    {name:"BCAA++", path:"BCAA++"},
    {name:"Pre-Workout", path:"Pre-Workout"},
    {name:"Fitness Paketi", path:"FitnessPaketi"},
    {name:"Collegen", path:"Collegen"},
    {name:"Günlük Vitamin Paketi", path:"GünlükVitaminPaketi"},
    {name:"ZMA", path:"ZMA"},
    ]
 

const Footer = () => {
 
    
  return (
    <div className="pt-16 bg-[#222222] hidden md:block w-full" >
        <div className="flex flex-col">
        <div className="flex flex-row md:justify-around lg:justify-between lg:w-8/12 lg:mx-auto md:px-8 lg:px-0 
         ">
        <div className="text-left">
            <img  className="mb-2 lg:w-32 lg:h-8" src={whiteLogo} alt="" />
            <ul>{footer1.map((foot, index) => <li key={index} className="text-gray-400 leading-6 text-xs"><Link to={foot.path}>{foot.name}</Link></li>)}</ul>
        </div>
        <div className="text-left">
            <h1 className="text-white mb-2 text-lg">Kategoriler</h1>
            <ul className="">{footer2.map((foot, index) => <li key={index} className="text-gray-400 leading-6 text-xs" ><Link to="">{foot.name}</Link></li>)}</ul>
        </div>
        <div className="text-left ">
            <Link to={""} className="mb-2 text-white text-lg">Popüler Ürünler</Link>
            <ul>{footer3.map((foot, index) => <li key={index} className="text-gray-400 leading-6 text-xs"><Link to="">{foot.name}</Link></li>)}</ul>
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
