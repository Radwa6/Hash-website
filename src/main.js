import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueI18n)

const messages = {
  en: {
    welcome: 'Welcome to our website',
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact Us',
    headerTitle: 'Transform Your Vision into Reality With Data Ways',
    headerText:
      'Convert your idea to reality with Hash Studio Inc through our customized solution.',
    SeeMore: 'See More',
    WatchVideo: 'Watch Video',

    viewPortfolio: 'View Portfolio',

    pages: 'Pages',

    about_us: 'ABOUT US',
    projects: 'Projects',
    others: 'Others',
    process: 'Process',
    members: 'Members',
    feedback: 'Feedback',
    contact_info: 'Contact Information',
    footer: 'Copyright ⓒ  Hash Studio Inc , 2024. All rights reserved.',
    aboutinfo:
      'Hash studio is a premier software agency offering integrated services, including business identity design, web solutions, programming, and hosting. With over 10 years of experience, our talented team of marketers, designers, and developers is dedicated to excellence and innovation.',
    abouth: 'Custom Software Built ',
    abouthh: 'for You !',

    //Portofolio
    OurrPortofolio: 'Our',
    OurPortofolio: 'Portofolio',
    ViewPortofolio: 'See All',

    VPNMobile: 'VPN Mobile App',
    MobileApp: 'Mobile App',
    StreamingMobile: 'Streaming Mobile App',
    CreativeDigitalAgency: 'Creative Digital Agency',
    LandingPage: 'Landing Page',
    PodcastMobile: 'Podcast Mobile App',
    MultimediaDesign: 'MultimediaDesign Platf...',
    WebDesign: 'Web Design',
    ParkingMobile: 'Parking Mobile App',

    Planing: 'Planing',
    Planinginfo:
      'We initially make planning on the full project visualization.',
    Analysis: 'Analysis',
    Analysisinfo:
      'Review this perception with the client and make the necessary adjustments.',
    Devlopment: 'Devlopment',
    Devlopmentinfo:
      'Implementation phase and duration varies depending on the project.',
    Review: 'Review',
    Reviewinfo: 'The stage of delivering the final structure of the project.',
    OurPortfolio: 'Our Portfolio',
    Portfolioinfo: ' We Have Completed',
    All: 'All',
    WebsiteDevelopment: 'Website Development',
    MobileApplication: 'Mobile Application',
    UIUXDesign: 'UI/UX Design',
    GraphicDesign: 'Graphic Design',
    MachineLearning: 'Machine Learning',
    partners: 'Sucess partners.',
    partner: 'Over 20 Companies Working with us..',
    servicesinfo: 'Services That We Can ',
    servicesinfoo: 'Provider !',
    offering: 'What We Are ',
    Offering: 'Offering',
    description:
      'we providing full digital services to empower our clients with advanced customized solution.',
    descriptionof: 'We offer high-quality services in various fields.',
    web_development: 'Websites',
    web_development_description:
      'We initially make planning on the full project visualization.',
    mobile_apps: 'Mobile Apps',
    mobile_apps_description:
      'We Create Stable and Secure Mobile Applications For All Needs.',
    ui_ux_design: 'UI/UX Design',
    ui_ux_design_description:
      'We Are Professional In Graphics We Can Create Logos, Motion Graphics.',

    TeamMember: 'Team Member',
    View: 'View',
    'Our Creative Team Members': 'Our Creative Team Members',
    name1: 'Mohamed Ahmed',
    role1: 'Mobile App Developer',
    name2: 'Yosra Allam',
    role2: 'Product Designer',
    name3: 'Nada Nasr',
    role3: 'Full Stack Developer',
    name4: 'Abduliam Allam',
    role4: 'Ceo & Technical Director',
    OurFeedback: 'Our Feedback',
    ClientSayaboutUs: 'Let’s hear What ',
    WhatOur: 'they says! ',

    namemember1: 'Maria Kate',
    rolee1: 'Photographer',
    feedback1:
      'I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.',
    namemember2: 'John Doe',
    rolee2: 'Web Developer',
    feedback2:
      'I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.',
    namemember3: 'Anna Deynah',
    rolee3: 'UX Designer',
    feedback3:
      'I am very satisfied with the services. Their team is very professional and efficient in completing our project on time and at a very affordable cost. The quality of their work is very good and I highly recommend this company for any construction project.',
    RequestQuote: 'Request a Quote',
    arealways: 'are always',
    ready: 'ready to help you....',
    FullName: 'Full Name',
    EmailAddress: 'Email Address',
    company: 'company',
    HearAbout: 'Did You Hear About Us?',
    Next: 'Next',
    Prev: 'Prev',
    projectInfo: 'Product Info',
    projectName: 'Project Name',
    client: 'Client',
    finishingDate: 'Finishing Date',
    duration: 'Duration',
    category: 'Category',
    webDevelopment: 'Web Development, Mobile Application, UI&UX Design',
    projectGallery: 'Project Gallery',
    projectLink: 'View Project',
    Gadawel: 'Gadawel',
    Gadawelinfo:
      'It is a system that allows companies to manage all aspects oftheir business on a single platform, including: inventory,finance, planning, logistics and operations. An ERP inventory management system provides real-time inventory information for theentire organization. This is an important ability for companies that plan to expand, have complex workflows or supply chains, need advanced automation, operate in a “just in time” mode, sell multiple products or simply want to increase their inventory investment.',
    Contact: 'For Contact',
    Chooseinfo: 'Why You Should  ',
    Chooseinfoo: 'Choosing Us!',
    Choosedescription:
      'Each step of our process is on delivering high-quality results, with attention to every detail.',

    Ustitle: 'Comprehensive Features',
    Uspragraph:
      ' we can provides flexible tools for easy creation, customization, and management of services.',
    Usstitle: 'Cost-Effective Solutions',
    Usspragraph:
      'users access high-quality service creation at competitive prices, saving time and money.',
    Ustitlee: 'Expert Support',
    Uspragraphh:
      ' It provides dedicated support and guidance, ensuring users receive help at every step for successful service',

    OURVALUE: 'OUR VALUE',
    VALUE: 'Convert Dream To ',
    VALUEe: 'Reality !',
    VALUEinfo:
      'We transform ideas into reality with custom software solutions, delivering scalable, high-quality applications. From concept to deployment, we ensure your visions success',
    Recent: 'Recent',
    Events: 'Events!',

    Projectname1: 'TADWEEN',
    Projectname2: 'RASAEL',
    Projectname3: 'Etamen',
    Projectname4: 'Feedbaky App',
    Projectname5: 'Claimizer',
    Projectname6: 'Check in',
    Projectname7: 'Gadawel',
    Projectname8: 'Hash Market',
    Projectname9: 'Afaak',
    Projectname10: 'Nartaki',
    Projectname11: 'Transportation App',
    Projectname12: 'Pasma',
  },
  ar: {
    welcome: 'مرحبًا بك في موقعنا',
    home: 'الصفحة الرئيسية',
    about: 'معلومات عنا',
    services: 'الخدمات',
    contact: 'اتصل بنا',
    headerTitle: 'حوّل رؤيتك إلى واقع مع Data Ways',
    headerText:
      'قم بتحويل فكرتك إلى حقيقة مع Hash Studio Inc من خلال الحل المخصص لدينا.',
    SeeMore: 'انظر المزيد ',
    WatchVideo: 'شاهد الفيديو ',

    viewPortfolio: 'عرض المحفظة',
    pages: 'الصفحات',
    about_us: 'من نحن',
    projects: 'المشاريع',
    others: 'أخرى',
    process: 'عملية',
    partners: 'شركاء النجاح',
    partner: 'أكثر من 20 شركة تعمل معنا..',

    members: 'الأعضاء',
    feedback: 'التغذية الراجعة',
    contact_info: 'معلومات الاتصال',
    footer:
      ' لحقوق الطبع والنشر ⓒ  Hash Studio Inc ، 2024 جميع الحقوق محفوظة. ',
    aboutinfo:
      'Hash studio هي وكالة برمجيات رائدة تقدم خدمات متكاملة، بما في ذلك تصميم هوية الأعمال وحلول الويب والبرمجة والاستضافة. مع أكثر من 10 سنوات من الخبرة، يكرس فريقنا الموهوب من المسوقين والمصممين والمطورين جهودهم للتميز والإبداع.',
    abouth: '  تم إنشاء برنامج مخصص ',
    abouthh: 'لك  !',

    //Portofolio
    OurPortofolio: 'نا ',
    OurrPortofolio: 'مشاريع',
    ViewPortofolio: 'عرض المزيد  ',
    VPNMobile: 'تطبيق VPN موبايل',
    MobileApp: 'تطبيق موبايل',
    StreamingMobile: 'تطبيق البث المباشر للموبايل',
    CreativeDigitalAgency: 'وكالة إبداعية رقمية',
    LandingPage: 'صفحة الهبوط',
    PodcastMobile: 'تطبيق البودكاست للموبايل',
    MultimediaDesign: 'منصة التصميم المتعدد الوسائط',
    WebDesign: 'تصميم الويب',
    ParkingMobile: 'تطبيق ركن السيارات للموبايل',
    Our: '',

    Planing: 'التخطيط',
    Planinginfo: 'نقوم في البداية بالتخطيط لرؤية كاملة للمشروع.',
    Analysis: 'التحليل',
    Analysisinfo: 'مراجعة هذه الرؤية مع العميل وإجراء التعديلات اللازمة.',
    Devlopment: 'التطوير',
    Devlopmentinfo: 'مرحلة التنفيذ، وتختلف مدتها حسب المشروع.',
    Review: 'المراجعة',
    Reviewinfo: ' مرحلة تسليم الهيكل النهائي للمشروع.',
    OurPortfolio: 'مشارعنا',
    Portfolioinfo: ' التى تم تنفيذها',
    All: 'الكل',
    WebsiteDevelopment: 'تطوير المواقع',
    MobileApplication: 'تطبيقات الجوال',
    UIUXDesign: 'تصميم واجهة المستخدم وتجربة المستخدم',
    GraphicDesign: 'التصميم الجرافيكي',
    MachineLearning: 'التعلم الآلي',
    servicesinfo: 'الخدمات التي يمكن أن ',
    servicesinfoo: 'نقدمها!',

    offering: 'ما الذي ',
    Offering: 'نقدمه ',
    description: 'نقدم خدمات عالية الجودة في مجالات متنوعة.',
    web_development: ' المواقع',
    web_development_description:
      'نحن نقوم في البداية بالتخطيط لتصور المشروع الكامل.',
    mobile_apps: 'تطبيقات الجوال',
    mobile_apps_description:
      'نقوم بإنشاء تطبيقات جوال مستقرة وآمنة لتناسب جميع الاحتياجات.',
    ui_ux_design: 'تصميم واجهة المستخدم',
    ui_ux_design_description:
      ' محترفون في تصميم الرسوميات، وإنشاء الشعارات، الرسوم المتحركة',
    TeamMember: 'عضو الفريق',
    View: 'عرض',
    'Our Creative Team Members': 'أعضاء فريقنا المبدعين',
    name1: 'محمد أحمد',
    role1: 'مطور تطبيقات الجوال',
    name2: 'يسرى علام',
    role2: 'مصمم منتجات',
    name3: 'ندى نصر',
    role3: 'مطور برمجيات متكامل',
    name4: 'عبداليم علام',
    role4: 'المدير التنفيذي ومدير التكنولوجيا',
    OurFeedback: 'آراؤنا',
    WhatOur: 'ماذا يقول',
    ClientSayaboutUs: 'عملاؤنا عنا',
    namemember1: 'ماريا كيت',
    rolee1: 'مصورة',
    feedback1:
      'أنا راضٍ جدًا عن الخدمات. فريقهم محترف جدًا وفعال في إتمام مشروعنا في الوقت المحدد وبتكلفة معقولة جدًا. جودة عملهم ممتازة وأوصي بشدة بهذه الشركة لأي مشروع بناء.',
    namemember2: 'جون دو',
    rolee2: 'مطور ويب',
    feedback2:
      'أنا راضٍ جدًا عن الخدمات. فريقهم محترف جدًا وفعال في إتمام مشروعنا في الوقت المحدد وبتكلفة معقولة جدًا. جودة عملهم ممتازة وأوصي بشدة بهذه الشركة لأي مشروع بناء.',
    namemember3: 'آنا ديناه',
    rolee3: 'مصممة تجربة المستخدم',
    feedback3:
      'أنا راضٍ جدًا عن الخدمات. فريقهم محترف جدًا وفعال في إتمام مشروعنا في الوقت المحدد وبتكلفة معقولة جدًا. جودة عملهم ممتازة وأوصي بشدة بهذه الشركة لأي مشروع بناء.',
    Next: 'التالى',
    Prev: 'السابق',
    projectInfo: 'معلومات المنتج',
    projectName: 'اسم المشروع',
    client: 'العميل',
    finishingDate: 'تاريخ الانتهاء',
    duration: 'المدة',
    category: 'الفئة',
    webDevelopment: 'تطوير الويب، تطبيقات الهاتف، تصميم واجهات المستخدم',
    projectGallery: 'معرض المشروع',
    projectLink: 'عرض المشروع',
    Gadawel: 'جداول',
    Gadawelinfo:
      'هو نظام يسمح للشركات بإدارة جميع جوانب أعمالها على منصة واحدة، بما في ذلك: المخزون، والمالية، والتخطيط، والخدمات اللوجستية، والعمليات. يوفر نظام إدارة المخزون ERP معلومات لحظية حول المخزون لجميع أجزاء المؤسسة. هذه القدرة مهمة للشركات التي تخطط للتوسع، أو لديها سير عمل معقد أو سلاسل توريد، أو تحتاج إلى أتمتة متقدمة، أو تعمل بنظام "الوقت المناسب"، أو تبيع العديد من المنتجات، أو ببساطة ترغب في زيادة استثماراتها في المخزون.',
    Contact: 'للتواصل',

    Chooseinfo: 'لماذا يجب عليك ',
    Chooseinfoo: 'اختيارنا!',
    Choosedescription:
      'كل خطوة في عمليتنا تركز على تقديم نتائج عالية الجودة مع الاهتمام بكل التفاصيل.',
    Ustitle: 'ميزات شاملة',
    Uspragraph: 'نوفر أدوات مرنة لإنشاء وتخصيص وإدارة الخدمات بسهولة.',
    Usstitle: 'حلول فعّالة من حيث التكلفة',
    Usspragraph:
      'يمكن للمستخدمين الوصول إلى إنشاء خدمات عالية الجودة بأسعار تنافسية، مما يوفر الوقت والمال.',
    Ustitlee: 'دعم خبراء',
    Uspragraphh:
      'يوفر الدعم والإرشاد المخصص، مما يضمن حصول المستخدمين على المساعدة في كل خطوة لتحقيق النجاح في الخدمة.',

    OURVALUE: 'قيمتنا',
    VALUE: 'حوّل الحلم إلى ',
    VALUEe: 'واقع !',
    VALUEinfo:
      'نحوّل الأفكار إلى واقع من خلال حلول البرمجيات المخصصة، مقدّمين تطبيقات عالية الجودة وقابلة للتوسع. من الفكرة إلى النشر، نضمن نجاح رؤيتك.',

    Events: 'فعاليات',
    Recent: 'حديثه!',

    'Saudi Flag Day': 'يوم العلم السعودي',
    'On March 11, 1937, King Abdulaziz issued his order approving Shura Council Resolution No. 354...':
      'في 11 مارس 1937، أصدر الملك عبد العزيز أمره بالموافقة على قرار مجلس الشورى رقم 354...',
    'Saudi National Day': 'اليوم الوطني السعودي',
    'The Kingdom of Saudi Arabia celebrates the National Day for the Unification of the Kingdom...':
      'تحتفل المملكة العربية السعودية باليوم الوطني لتوحيد المملكة في 23 سبتمبر من كل عام...',
    'Anniversary of the pledge of allegiance': 'ذكرى البيعة',
    'Prince Mohammed bin Salman was pledged as Crown Prince on June 21, 2017...':
      'تمت البيعة للأمير محمد بن سلمان كولي للعهد في 21 يونيو 2017...',

    Projects: 'المشاريع',

    Graphics: 'رسوميات',
  },
}

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
