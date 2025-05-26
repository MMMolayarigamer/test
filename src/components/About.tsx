import React from 'react';
import { Gamepad, Swords, Mountain, Stars } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="relative">
              <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">Discover</span>
              <span className="block">درباره ی اکتیو لجندز</span>
              <div className="h-1 w-24 bg-primary mt-4"></div>
            </h2>
            
            <p className="my-6">
              اینجا در Active Legends، ما عاشق خلق ماجراجویی‌های حماسی هستیم! برای ما، ساختن دنیایی وسیع و پر از رمز و راز، که در هر گوشه‌اش خطر و کشف جدیدی منتظره، یه عشق بزرگه. هدفمون اینه که شما رو توی سفرهایی غرق کنیم که هیچ‌وقت از یادتون نمیره؛ سفرهایی که توشون باید حسابی مبارزه کنید، توی محیط‌های خفن جاخالی بدید و پازل‌های باحال رو حل کنید تا رازهای تمدن‌های باستانی رو کشف کنید. بیاید با هم افسانه‌ها رو زندگی کنیم!
            </p>
            
            <p className="mb-6">
              در Active Legends، ما می‌دونیم که چی شما رو سر ذوق میاره! برای همین، بازی‌های ما پر از تصاویر فوق‌العاده، داستان‌هایی با عمق احساسی و گیم‌پلی‌ای که سریع به واکنش‌های شما جواب می‌ده، هستن. فرقی نمی‌کنه که فقط گاهی بازی می‌کنید یا یه گیمر حرفه‌ای هستید، بازی‌های ما همه رو جذب خودش می‌کنه. مهم‌تر از همه، دنیای بازی‌های ما به انتخاب‌های شما واکنش نشون میده و برای هر بازیکن، یه ماجرای خاص و تکرارنشدنی رو رقم میزنه!
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Gamepad className="text-primary mr-3 h-6 w-6" />
                <span>کنترل‌های روان</span>
              </div>
              <div className="flex items-center">
                <Swords className="text-primary mr-3 h-6 w-6" />
                <span>نبرد چالش‌برانگیز</span>
              </div>
              <div className="flex items-center">
                <Mountain className="text-primary mr-3 h-6 w-6" />
                <span>جهان بی‌کران</span>
              </div>
              <div className="flex items-center">
                <Stars className="text-primary mr-3 h-6 w-6" />
                <span>داستان‌های ماندگار</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-dark-lighter relative">
              <img 
                src="https://images.pexels.com/photos/7915520/pexels-photo-7915520.jpeg" 
                alt="Game screenshot" 
                className="w-full h-full object-cover"
              />
              
              {/* Geometric accent inspired by AE logo */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full border border-primary z-10"></div>
            </div>
            
            {/* Second image with offset */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-dark-lighter absolute -top-8 -right-8 z-0 opacity-50 w-4/5">
              <img 
                src="https://images.pexels.com/photos/7915251/pexels-photo-7915251.jpeg" 
                alt="Game screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;