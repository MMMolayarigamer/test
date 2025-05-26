import React from 'react';
import { Monitor, Sword, Users, Map, Code } from 'lucide-react';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-lighter p-6 rounded-lg transition-all duration-300 hover:bg-dark-lighter/80 hover:translate-y-[-5px]">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading mb-3">{title}</h3>
      <p className="text-light-dark">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-dark-darker">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="relative inline-block">
            <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">تجربه</span>
            <span className="block">ویژگی‌های برجسته</span>
            <div className="h-1 w-24 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-light-dark mt-6">
            تو Active Legends، ما یه فرمول جادویی داریم: گرافیک خیره‌کننده رو با گیم‌پلی خلاقانه و داستان‌هایی پربار قاطی می‌کنیم. نتیجه‌اش میشه یه تجربه بازی که هیچ‌وقت از ذهنتون نمیره و شما رو حسابی هیجان‌زده می‌کنه!


          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem 
            icon={<Monitor className="text-primary h-6 w-6" />}
            title="گرافیک خیره‌کننده"
            description="ما به تصاویر زیبا و دقیق اهمیت زیادی میدیم. با استفاده از فناوری‌های پیشرفته رندرینگ، تلاش می‌کنیم تا دنیای بازی‌هامون رو با جزئیات چشم‌نواز و فضاسازی‌های جذاب به بهترین شکل ممکن زنده کنیم.."
          />
          
          <FeatureItem 
            icon={<Sword className="text-primary h-6 w-6" />}
            title="مبارزات خلاقانه"
            description="ما یه سیستم مبارزه خلاقانه و عمیق طراحی می‌کنیم. اینجا فقط سرعت عمل مهم نیست؛ باید فکر کنید و تصمیمات استراتژیک بگیرید. هر نبرد، ترکیبی از واکنش‌های سریع و تصمیم‌گیری هوشمندانه است تا یه تجربه مبارزه حسابی چالش‌برانگیز رو براتون رقم بزنه."
          />
          
          <FeatureItem 
            icon={<Users className="text-primary h-6 w-6" />}
            title="حالت چندنفره"
            description="هیجان بازی رو با دوستاتون تجربه کنید! می‌تونید به صورت همکاری (Co-op) با هم تیم بشید و چالش‌ها رو پشت سر بذارید، یا مهارت‌هاتون رو در حالت‌های رقابتی در برابر بازیکن‌های دیگه به نمایش بذارید و برای پیروزی بجنگید."
          />
          
          <FeatureItem 
            icon={<Map className="text-primary h-6 w-6" />}
            title="جهان آزاد"
            description="آماده باشید تا در جهان‌های وسیع و بدون مرز ما غرق بشید! هر گوشه این دنیاها پر از گنج‌های پنهان، دشمن‌های چالش‌برانگیز و چشم‌اندازهای نفس‌گیر هست که شما رو شگفت‌زده می‌کنه. آزادی کامل برای کشف و ماجراجویی با شماست."
          />
          
          <FeatureItem 
            icon={<Code className="text-primary h-6 w-6" />}
            title="هوش مصنوعی پیشرفته"
            description="با دشمنان باهوشی روبرو می‌شید که واقعاً خودشون رو با سبک بازی شما وفق میدن. این یعنی هر مبارزه یه چالش جدیده و هیچ‌وقت نمی‌تونید حرکت بعدیشون رو حدس بزنید!"
          />
          
          <div className="bg-primary p-6 rounded-lg text-dark-darker">
            <h3 className="text-xl font-heading mb-3">به زودی...</h3>
            <p className="font-medium">در Active Legends، ما در حال کار روی یه پروژه هیجان‌انگیز و جدید هستیم! این بازی کلی محتوای تازه، شخصیت‌های جذاب و ویژگی‌های گیم‌پلی نوآورانه داره. منتظر خبرهای تکمیلی باشید!</p>
            <div className="mt-4 h-1 w-16 bg-dark-darker"></div>
            <p className="mt-4 text-sm">برای باخبر شدن از آخرین اخبار و به‌روزرسانی‌ها، در سایت ما عضو شوید!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;