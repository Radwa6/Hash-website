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
    aboutus: 'About Us',
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
    processhead: 'Our process covers',
    everything: 'everything!',
    processpragraph:
      ' Each step of our process is on delivering high-quality results, with attention to every detail.',
    Analysis: 'Analysis & Design',
    Analysisinfo:
      'Review this perception with the client and make the necessary adjustments.',
    Implementation: 'Implementation',
    Implementationinfo:
      'Implementation phase and duration varies depending on the project.',
    Review: 'Review and Closure',
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
    namemember1: 'Abdulrahman Masoud',
    rolee1: 'Backend Developer',
    feedback1:
      'This website saves my whole thought process for me. On the top of that , we operating the website so fast, they are running circles around the industry leader HashStudio definitely looks like the future.This website saves my whole thought process for me. On the top of that , we operating the website so fast, they are running circles around the industry leader HashStudio definitely looks like the future.',
    namemember2: 'Amir Mohamed',
    rolee2: 'Frontend Developer',
    feedback2:
      'Thank you for developing such a HashStudio product in workspace.One of the best decisions i made as a software engineer was to start following and working with HashStudio as a vehicle to drive my passion.',
    namemember3: 'Alia Ibrahim',
    rolee3: 'UI & UX Designer',
    feedback3:
      'Hash Studio is a full-featured, modern, stable, mobile-friendly product that sets a new industry standard.',
    namemember4: 'Ahmed Galal',
    rolee4: 'Mobile Apps',
    feedback4:
      'Hash Studio is the most intuitive and easy to use software product I have ever used.',
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

    //Odoooo
    Apps: 'Apps',
    Modules: 'Modules',
    Industries: 'Industries',
    'All your business': 'All your business',
    'Operation in one place.': 'Operation in one place.',
    'Manage your business—sales, invoicing, accounting, clients, workforce,':
      'Manage your business—sales, invoicing, accounting, clients, workforce,',
    'inventory, and operations—all in one place':
      'inventory, and operations—all in one place',
    'Get a Free Demo': 'Get a Free Demo',
    'See Pricing': 'See Pricing',

    'WHY CHOOSE US': 'WHY CHOOSE US',
    'Committed as Your Business Partner': 'Committed as Your Business Partner',
    'Hash is hosted on secure servers, with 256-bit SSL encryption technology, so is your data in full, private, protected, with constant auto-backups for increased security.':
      'Hash is hosted on secure servers, with 256-bit SSL encryption technology, so is your data in full, private, protected, with constant auto-backups for increased security.',
    'Curated with personalization prioritized, create from scratch or find fully customizable templates, field entries, report filtering, customizable system.':
      'Curated with personalization prioritized, create from scratch or find fully customizable templates, field entries, report filtering, customizable system.',
    'Personalized Experience': 'Personalized Experience',
    'Free & Quick Support': 'Free & Quick Support',
    'Safe & Secure': 'Safe & Secure',
    'ODOO INTRGRATION': 'ODOO INTRGRATION',
    'Optimise inventory management': 'Optimise inventory management',
    'Our platform helps your business in managing expenses. These are some of the':
      'Our platform helps your business in managing expenses. These are some of the',
    'reasons why you should use our platform in managing business finances.':
      'reasons why you should use our platform in managing business finances.',
    'Synchronise Odoo & Hash Studio': 'Synchronise Odoo & Hash Studio',
    'Seamlessly synchronize Odoo with Hash Studio for integrated business solutions.':
      'Seamlessly synchronize Odoo with Hash Studio for integrated business solutions.',
    'Customise your forecasting methods': 'Customise your forecasting methods',
    'Customize and refine your forecasting methods to align perfectly with your unique business needs.':
      'Customize and refine your forecasting methods to align perfectly with your unique business needs.',
    'Start optimising your inventory': 'Start optimising your inventory',
    'Start optimizing your inventory now to streamline operations, reduce costs, and maximize profitability.':
      'Start optimizing your inventory now to streamline operations, reduce costs, and maximize profitability.',

    'Our Business Modules': 'Our Business Modules',
    'Business Modules in one Place': 'Business Modules in one Place',
    'Functioning seamlessly, whether individually or concurrently—utilize all features,':
      'Functioning seamlessly, whether individually or concurrently—utilize all features,',
    'or activate and deactivate as needed to fit your business requirements.':
      'or activate and deactivate as needed to fit your business requirements.',
    'Sales & Purchase': 'Sales & Purchase',
    'Invoicing, sales commission management, insurance management, promotional offers':
      'Invoicing, sales commission management, insurance management, promotional offers',
    Inventory: 'Inventory',
    'Stock Tracking, Barcode, Purchases, Suppliers, Warehouses,Stocktaking, Requisitions':
      'Stock Tracking, Barcode, Purchases, Suppliers, Warehouses, Stocktaking, Requisitions',
    'Human Resourse': 'Human Resourse',
    'Employee database, payroll, contracts, attendance, multi-shifts, requests, and loans.':
      'Employee database, payroll, contracts, attendance, multi-shifts, requests, and loans.',
    Manufacturing: 'Manufacturing',
    'Manufacturing converts raw materials into finished products through various processes.':
      'Manufacturing converts raw materials into finished products through various processes.',
    'Point Of Sale': 'Point Of Sale',
    'systems streamline transactions, manage inventory, and provide sales analytics.':
      'systems streamline transactions, manage inventory, and provide sales analytics.',
    Accounting: 'Accounting',
    'Expenses, tax, treasuries, cheque cycle, accounts, cost centers, and financial reports.':
      'Expenses, tax, treasuries, cheque cycle, accounts, cost centers, and financial reports.',
    'Projects & Tasks': 'Projects & Tasks',
    'Manage projects and tasks by assigning responsibilities, setting deadlines, and tracking progress.':
      'Manage projects and tasks by assigning responsibilities, setting deadlines, and tracking progress.',
    'Employee Management': 'Employee Management',
    'Manage employees by overseeing hiring, performance, payroll, and development for optimal productivity and engagement.':
      'Manage employees by overseeing hiring, performance, payroll, and development for optimal productivity and engagement.',
    Subscriptions: 'Subscriptions',
    'Manage subscriptions by tracking plans, payment details, renewal dates, and customer information for seamless billing and service delivery.':
      'Manage subscriptions by tracking plans, payment details, renewal dates, and customer information for seamless billing and service delivery.',
    'Order Mangement': 'Order Mangement',
    'Add products with SKUs, organize by category, set pricing, inventory with stock and tracking options.':
      'Add products with SKUs, organize by category, set pricing, inventory with stock and tracking options.',
    'Client & Suppliers': 'Client & Suppliers',
    'Maintain a database of suppliers and clients, track balances, and generate detailed transaction statements.':
      'Maintain a database of suppliers and clients, track balances, and generate detailed transaction statements.',
    Expenses: 'Expenses',
    'Control your finances and manage expenses with Systems real-time tracking and insightful reports.':
      'Control your finances and manage expenses with Systems real-time tracking and insightful reports.',

    'Discover Our Modules': 'Discover Our Modules',
    'Consolidated Business Solutions': 'Consolidated Business Solutions',
    'WHAT THEY SAY': 'WHAT THEY SAY',
    'Our Users Share Their Experiences': 'Our Users Share Their Experiences',
    'Here are some testimonials from our users after working with us to manage their business expense':
      'Here are some testimonials from our users after working with us to manage their business expense',
    titles: [
      'Human Resource',
      'Sales & Purchases',
      'Manufacturing',
      'Accounting',
      'Point Of Sale',
      'Inventory Management',
    ],
    'Best System for superior client': 'Best System for superior client',
    'care!': 'care!',
    'Oversee daily team task updates': 'Oversee daily team task updates',
    'Skillful resolution of employee cases':
      'Skillful resolution of employee cases',
    'File requests for leave and approvals':
      'File requests for leave and approvals',
    'Projects Management': 'Projects Management',
    'Oversee employee project': 'Oversee employee project',
    'management!': 'management!',
    'Administer projects for employees': 'Administer projects for employees',
    'Attendance &Employees Management': 'Attendance &Employees Management',
    'Managing work hours and shift distribution':
      'Managing work hours and shift distribution',

    'Sale & Purchase Management': 'Sale & Purchase Management',
    'Monitor your sales & purchases': 'Monitor your sales & purchases',
    'instantly!': 'instantly!',
    'Manage your Invoices with Hash Cloud ERP—track stock, issue invoices, manage payments, and get detailed reports on purchases , Sales and suppliers.':
      'Manage your Invoices with Hash Cloud ERP—track stock, issue invoices, manage payments, and get detailed reports on purchases , Sales and suppliers.',
    'Start Now': 'Start Now',

    'Manfacturing Management': 'Manfacturing Management',
    'Keep your manufacturing data updated':
      'Keep your manufacturing data updated',
    'live !': 'live !',
    'Track manufacturing revenues, costs, and profits; manage production and inventory; and generate reports—all without needing an accountant.':
      'Track manufacturing revenues, costs, and profits; manage production and inventory; and generate reports—all without needing an accountant.',

    'Accounting Management': 'Accounting Management',
    'Get live visibility of your accounting':
      'Get live visibility of your accounting',
    'records!': 'records!',
    'Track revenues, expenses, and profits; manage payments and invoices; and generate reports—all without needing an accountant.':
      'Track revenues, expenses, and profits; manage payments and invoices; and generate reports—all without needing an accountant.',

    'Point Of Sale System': 'Point Of Sale System',
    'Keep tabs on your POS in': 'Keep tabs on your POS in',
    'real-time!': 'real-time!',
    'Supports units, barcode, and serial number':
      'Supports units, barcode, and serial number',
    'Printers, barcode , scales, and cash drawers':
      'Printers, barcode , scales, and cash drawers',
    'Compatible with all devices and operation systems':
      'Compatible with all devices and operation systems',

    'Inventory Management': 'Inventory Management',
    'Stay updated on inventory levels': 'Stay updated on inventory levels',
    'continuously!': 'continuously!',
    'Inventory Management helps you organize products, track stock in real-time, manage multiple warehouses, send purchase orders, and assign staff—all with easy, professional tools.':
      'Inventory Management helps you organize products, track stock in real-time, manage multiple warehouses, send purchase orders, and assign staff—all with easy, professional tools.',

    'I never imagined that managing my business expenses could be so easy with hash team! I have been using this platform for three months, and I am still loving it':
      'I never imagined that managing my business expenses could be so easy with hash team! I have been using this platform for three months, and I am still loving it',

    'I have been using the system to manage my business expenses for just one month, and the results have been incredibly satisfying! My organized than before. Thank you to the entire team!':
      'I have been using the system to manage my business expenses for just one month, and the results have been incredibly satisfying! My organized than before. Thank you to the entire team!',

    'This is simply the best! I didn’t realize there was a platform like this to help manage business expenses. I highly recommend it for anyone with a large business!':
      'This is simply the best! I didn’t realize there was a platform like this to help manage business expenses. I highly recommend it for anyone with a large business!',

    'Business Industries': 'Business Industries',
    'Whatever your industry, it’s the right fit!':
      'Whatever your industry, it’s the right fit!',
    'Crafted to align with different industries through a wide selection of customized solutions.':
      'Crafted to align with different industries through a wide selection of customized solutions.',
    Constraction: 'Constraction',
    E_commerce: 'E_commerce',
    Companies: 'Companies',
    Factories: 'Factories',
    'Real State': 'Real State',

    'With Us': 'Start  With Us  Now',
    'Start Track Your Business Expenses Today':
      'Start Track Your Business Expenses Today',
    'Are you ready to make your business more organized? Contact With Us Now':
      'Are you ready to make your business more organized? Contact With Us Now',

    'Manage your business—sales, invoicing, accounting, clients, workforce, inventory, and operations—all in one place':
      'Manage your business—sales, invoicing, accounting, clients, workforce, inventory, and operations—all in one place',
    'Business Modules': 'Business Modules',
    'Odoo Integration': 'Odoo Integration',
    'Client Feedback': 'Client Feedback',
    'Sales & Purshace': 'Sales & Purshace',
    'Follow Us': 'Follow Us',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Instagram: 'Instagram',
    Facebook: 'Facebook',
    YouTube: 'YouTube',
    'Privacy Policcentery | Terms & Conditions | Cookie Policy':
      'Privacy Policcentery | Terms & Conditions | Cookie Policy',
  },
  ar: {
    welcome: 'مرحبًا بك في موقعنا',
    home: 'الصفحة الرئيسية',
    about: 'معلومات عنا',
    aboutus: 'معلومات عنا',
    services: 'الخدمات',
    contact: 'تواصل معنا',
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
    processhead: 'تغطي عمليتنا',
    everything: 'كل شئ!',
    processpragraph:
      'تهدف كل خطوة من خطوات عمليتنا إلى تقديم نتائج عالية الجودة، مع الاهتمام بكل التفاصيل.',
    Analysis: 'التحليل والتصميم',
    Analysisinfo: 'مراجعة هذه الرؤية مع العميل وإجراء التعديلات اللازمة.',
    Implementation: 'التنفيذ',
    Implementationinfo: 'مرحلة التنفيذ، وتختلف مدتها حسب المشروع.',
    Review: 'المراجعة والختام',
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
    namemember1: 'عبدالرحمن مسعود',
    rolee1: ' مطور الخلفية',
    feedback1:
      'هذا الموقع يحفظ كل أفكاري. بالإضافة إلى ذلك، نحن نشغّل الموقع بسرعة كبيرة، حيث يتفوق على القادة في هذا المجال. HashStudio بالتأكيد يبدو كأنه المستقبل.',
    namemember2: 'أمير محمد',
    rolee2: 'مطور الواجهة الأمامية',
    feedback2:
      'شكرًا على تطوير منتج HashStudio في بيئة العمل. واحدة من أفضل القرارات التي اتخذتها كمهندس برمجيات كانت متابعة والعمل مع HashStudio لتحقيق شغفي.',
    namemember3: 'عليا إبراهيم',
    rolee3: 'مصممة واجهات وتجربة مستخدم (UI & UX)',
    feedback3:
      'Hash Studio هو منتج حديث، متكامل، مستقر، ومتوافق مع الهواتف المحمولة، ويضع معيارًا جديدًا في هذا المجال.',
    namemember4: 'أحمد جلال',
    rolee4: 'تطبيقات الهواتف المحمولة',
    feedback4:
      'Hash Studio هو أكثر برامج سهولة في الاستخدام وفهمًا التي استخدمتها في حياتي.',
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
    Projectname1: 'تدوين',
    Projectname2: 'رسائل',
    Projectname3: 'اطمئن',
    Projectname4: 'فيدباكي ',
    Projectname5: 'كليميزر',
    Projectname6: 'تشيك ان ',
    Projectname7: 'جداول',
    Projectname8: 'Hash Market',
    Projectname9: 'آفاق',
    Projectname10: 'نرتقي',
    Projectname11: 'سكك حديد مصر ',
    Projectname12: 'بصمه',
    ERPSystem: 'نظام تخطيط موارد المؤسسات',

    //Odoooo
    Apps: 'التطبيقات',
    Modules: 'وحدات',
    Industries: 'الصناعات',
    'All your business': 'كل ما يخص عملك',
    'Operation in one place.': ' في مكان واحد.',
    'Manage your business—sales, invoicing, accounting, clients, workforce,':
      'إدارة أعمالك - المبيعات، الفواتير، المحاسبة، العملاء، القوى العاملة،',
    'inventory, and operations—all in one place':
      'المخزون والعمليات - كلها في مكان واحد',
    'Get a Free Demo': 'احصل على عرض مجاني',
    'See Pricing': 'انظر التسعير ',

    'WHY CHOOSE US': 'لماذا تختارنا؟',
    'Committed as Your Business Partner': 'ملتزمون بأن نكون شريكك التجاري',
    'Hash is hosted on secure servers, with 256-bit SSL encryption technology, so is your data in full, private, protected, with constant auto-backups for increased security.':
      'يتم استضافة Hash على خوادم آمنة، مع تقنية تشفير SSL 256 بت، وبالتالي فإن بياناتك كاملة وخاصة ومحمية، مع نسخ احتياطية تلقائية مستمرة لتحسين الأمان.',
    'Curated with personalization prioritized, create from scratch or find fully customizable templates, field entries, report filtering, customizable system.':
      'تم إعدادها مع إعطاء الأولوية للتخصيص، وإنشاء قوالب قابلة للتخصيص بالكامل من الصفر أو العثور عليها، وإدخالات الحقول، وتصفية التقارير، والنظام القابل للتخصيص.',
    'Personalized Experience': 'تجربة شخصية',
    'Free & Quick Support': 'دعم مجاني وسريع',
    'Safe & Secure': 'آمن ومضمون',
    'ODOO INTRGRATION': 'تكامل ODOO',
    'Optimise inventory management': 'إدارة المخزون بشكل مثالي',
    'Our platform helps your business in managing expenses. These are some of the':
      'تساعد منصتنا عملك في إدارة النفقات. إليك بعض الأسباب التي تجعلك تستخدم منصتنا في إدارة الشؤون المالية.',
    'reasons why you should use our platform in managing business finances.':
      'الأسباب التي تجعلك تستخدم منصتنا في إدارة الشؤون المالية.',
    'Synchronise Odoo & Hash Studio': 'التزامن بين Odoo و Hash Studio',
    'Seamlessly synchronize Odoo with Hash Studio for integrated business solutions.':
      'قم بالتزامن السلس بين Odoo و Hash Studio للحصول على حلول تجارية متكاملة.',
    'Customise your forecasting methods': 'تخصيص أساليب التنبؤ',
    'Customize and refine your forecasting methods to align perfectly with your unique business needs.':
      'قم بتخصيص وتحسين أساليب التنبؤ الخاصة بك لتتناسب تمامًا مع احتياجات عملك الفريدة.',
    'Start optimising your inventory': 'ابدأ في تحسين إدارة المخزون',
    'Start optimizing your inventory now to streamline operations, reduce costs, and maximize profitability.':
      'ابدأ في تحسين إدارة المخزون الآن لتبسيط العمليات، وتقليل التكاليف، وزيادة الربحية.',

    'Our Business Modules': 'وحدات أعمالنا',
    'Business Modules in one Place': 'وحدات الأعمال في مكان واحد',
    'Functioning seamlessly, whether individually or concurrently—utilize all features,':
      'تعمل بسلاسة، سواء بشكل فردي أو بالتزامن - استخدم جميع الميزات',
    'or activate and deactivate as needed to fit your business requirements.':
      'أو قم بتفعيل وإلغاء التفعيل حسب الحاجة لتناسب متطلبات عملك',

    'Sales & Purchase': 'المبيعات والشراء',
    'Invoicing, sales commission management, insurance management, promotional offers':
      'الفواتير، إدارة عمولات المبيعات، إدارة التأمين، العروض الترويجية',

    Inventory: 'المخزون',
    'Stock Tracking, Barcode, Purchases, Suppliers, Warehouses,Stocktaking, Requisitions':
      'تتبع المخزون، الرموز الشريطية، المشتريات، الموردين، المستودعات، جرد المخزون، الطلبات',

    'Human Resourse': 'الموارد البشرية',
    'Employee database, payroll, contracts, attendance, multi-shifts, requests, and loans.':
      'قاعدة بيانات الموظفين، الرواتب، العقود، الحضور، الشifts المتعددة، الطلبات، والقروض',

    Manufacturing: 'التصنيع',
    'Manufacturing converts raw materials into finished products through various processes.':
      'يقوم التصنيع بتحويل المواد الخام إلى منتجات نهائية من خلال عمليات مختلفة',

    'Point Of Sale': 'نقطة البيع',
    'systems streamline transactions, manage inventory, and provide sales analytics.':
      'أنظمة تسهيل المعاملات، إدارة المخزون، وتوفير تحليلات المبيعات',

    Accounting: 'المحاسبة',
    'Expenses, tax, treasuries, cheque cycle, accounts, cost centers, and financial reports.':
      'المصاريف، الضرائب، الخزائن، دورة الشيكات، الحسابات، مراكز التكلفة، والتقارير المالية',

    'Projects & Tasks': 'المشاريع والمهام',
    'Manage projects and tasks by assigning responsibilities, setting deadlines, and tracking progress.':
      'إدارة المشاريع والمهام من خلال تعيين المسؤوليات، تحديد المواعيد النهائية، وتتبع التقدم',

    'Employee Management': 'إدارة الموظفين',
    'Manage employees by overseeing hiring, performance, payroll, and development for optimal productivity and engagement.':
      'إدارة الموظفين من خلال الإشراف على التوظيف، الأداء، الرواتب، والتطوير لتحقيق الإنتاجية والمشاركة المثلى',

    Subscriptions: 'الاشتراكات',
    'Manage subscriptions by tracking plans, payment details, renewal dates, and customer information for seamless billing and service delivery.':
      'إدارة الاشتراكات من خلال تتبع الخطط، تفاصيل الدفع، تواريخ التجديد، ومعلومات العملاء لفوترة سلسة وتقديم الخدمة',

    'Order Mangement': 'إدارة الطلبات',
    'Add products with SKUs, organize by category, set pricing, inventory with stock and tracking options.':
      'إضافة المنتجات برموز SKU، تنظيمها حسب الفئة، تحديد الأسعار، والمخزون مع خيارات التتبع',

    'Client & Suppliers': 'العملاء والموردين',
    'Maintain a database of suppliers and clients, track balances, and generate detailed transaction statements.':
      'الحفاظ على قاعدة بيانات الموردين والعملاء، تتبع الأرصدة، وتوليد بيانات تفصيلية للمعاملات',

    Expenses: 'المصاريف',
    'Control your finances and manage expenses with Systems real-time tracking and insightful reports.':
      'التحكم في شؤونك المالية وإدارة المصاريف من خلال التتبع في الوقت الفعلي والتقارير المفيدة',

    'Discover Our Modules': 'استكشف وحداتنا',
    'Consolidated Business Solutions': 'حلول أعمال موحدة',
    'WHAT THEY SAY': 'ماذا يقولون',
    'Our Users Share Their Experiences': 'مستخدمونا يشاركون تجاربهم',
    'Here are some testimonials from our users after working with us to manage their business expense':
      'إليك بعض الشهادات من مستخدمينا بعد العمل معنا لإدارة نفقات أعمالهم',
    'Human Resource': 'الموارد البشرية',
    titles: [
      'الموارد البشرية',
      'المبيعات والمشتريات',
      'التصنيع',
      'المحاسبة',
      'نقاط البيع',
      'إدارة المخزون',
    ],
    'Best System for superior client': 'أفضل نظام لخدمة العملاء المتميزين',
    'care!': 'اهتمام!',
    'Oversee daily team task updates':
      'الإشراف على تحديثات مهام الفريق اليومية',
    'Skillful resolution of employee cases': 'حل ماهر لحالات الموظفين',
    'File requests for leave and approvals': 'تقديم طلبات الإجازات والموافقات',
    'Projects Management': 'إدارة المشاريع',
    'Oversee employee project': 'الإشراف على مشاريع الموظفين',
    'management!': 'إدارة!',
    'Administer projects for employees': 'إدارة المشاريع للموظفين',
    'Attendance &Employees Management': 'إدارة الحضور والموظفين',
    'Managing work hours and shift distribution':
      'إدارة ساعات العمل وتوزيع الورديات',

    'Sale & Purchase Management': 'إدارة المبيعات والمشتريات',
    'Monitor your sales & purchases': 'راقب مبيعاتك ومشترياتك',
    'instantly!': 'فوراً!',
    'Manage your Invoices with Hash Cloud ERP—track stock, issue invoices, manage payments, and get detailed reports on purchases , Sales and suppliers.':
      'قم بإدارة فواتيرك باستخدام Hash Cloud ERP—تتبع المخزون، إصدار الفواتير، إدارة المدفوعات، واحصل على تقارير مفصلة عن المشتريات والمبيعات والموردين.',
    'Start Now': 'ابدأ الآن',
    'Manfacturing Management': 'إدارة التصنيع',
    'Keep your manufacturing data updated':
      'حافظ على تحديث بيانات التصنيع الخاصة بك',
    'live !': 'مباشرة!',
    'Track manufacturing revenues, costs, and profits; manage production and inventory; and generate reports—all without needing an accountant.':
      'تتبع إيرادات التصنيع وتكاليفه وأرباحه؛ قم بإدارة الإنتاج والمخزون؛ وولّد التقارير—وكل ذلك دون الحاجة إلى محاسب.',

    'Accounting Management': 'إدارة الحسابات',
    'Get live visibility of your accounting': 'احصل على رؤية فورية لحساباتك',
    'records!': 'السجلات!',
    'Track revenues, expenses, and profits; manage payments and invoices; and generate reports—all without needing an accountant.':
      'تتبع الإيرادات والمصروفات والأرباح؛ قم بإدارة المدفوعات والفواتير؛ وولّد التقارير—وكل ذلك دون الحاجة إلى محاسب.',

    'Point Of Sale System': 'نظام نقاط البيع',
    'Keep tabs on your POS in': 'تابع نظام نقاط البيع الخاص بك في',
    'real-time!': 'الوقت الفعلي!',
    'Supports units, barcode, and serial number':
      'يدعم الوحدات، الباركود، والأرقام التسلسلية',
    'Printers, barcode , scales, and cash drawers':
      'الطابعات، الباركود، الميزان، وأدراج النقود',
    'Compatible with all devices and operation systems':
      'متوافق مع جميع الأجهزة وأنظمة التشغيل',

    'Inventory Management': 'إدارة المخزون',
    'Stay updated on inventory levels': 'ابقَ على اطلاع بمستويات المخزون',
    'continuously!': 'بشكل مستمر!',
    'Inventory Management helps you organize products, track stock in real-time, manage multiple warehouses, send purchase orders, and assign staff—all with easy, professional tools.':
      'تساعدك إدارة المخزون في تنظيم المنتجات، وتتبع المخزون في الوقت الفعلي، وإدارة مستودعات متعددة، وإرسال أوامر الشراء، وتعيين الموظفين—وكل ذلك باستخدام أدوات سهلة واحترافية.',
    'I never imagined that managing my business expenses could be so easy with hash team! I have been using this platform for three months, and I am still loving it':
      'لم أكن أتخيل أبدًا أن إدارة نفقاتي التجارية يمكن أن تكون بهذه السهولة مع فريق هاش! لقد كنت أستخدم هذه المنصة لمدة ثلاثة أشهر، وما زلت أحبها.',

    'I have been using the system to manage my business expenses for just one month, and the results have been incredibly satisfying! My organized than before. Thank you to the entire team!':
      'لقد كنت أستخدم النظام لإدارة نفقاتي التجارية منذ شهر واحد فقط، وكانت النتائج مرضية للغاية! أصبحت أموالي أكثر تنظيمًا من قبل. شكرًا للفريق بأكمله!',

    'This is simply the best! I didn’t realize there was a platform like this to help manage business expenses. I highly recommend it for anyone with a large business!':
      'هذا ببساطة الأفضل! لم أكن أدرك أن هناك منصة مثل هذه تساعد في إدارة النفقات التجارية. أوصي بشدة بها لأي شخص لديه عمل كبير!',

    'Business Industries': 'صناعات الأعمال',
    'Whatever your industry, it’s the right fit!':
      'مهما كانت صناعتك، فهي الملائمة الصحيحة!',
    'Crafted to align with different industries through a wide selection of customized solutions.':
      'مصممة لتتناسب مع صناعات مختلفة من خلال مجموعة واسعة من الحلول المخصصة.',
    Constraction: 'البناء',
    E_commerce: 'التجارة الإلكترونية',
    Companies: 'شركات',
    Factories: 'المصانع',
    'Real State': 'العقارات',

    'With Us': 'ابدأ معنا الآن',
    'Start Track Your Business Expenses Today': 'ابدأ بتتبع نفقات عملك اليوم',
    'Are you ready to make your business more organized? Contact With Us Now':
      'هل أنت مستعد لجعل عملك أكثر تنظيمًا؟ اتصل بنا الآن',
    'Manage your business—sales, invoicing, accounting, clients, workforce, inventory, and operations—all in one place':
      'إدارة أعمالك - المبيعات، والفوترة، والمحاسبة، والعملاء، والقوى العاملة، والمخزون، والعمليات - كل ذلك في مكان واحد',
    'Business Modules': 'وحدات الأعمال',
    'Odoo Integration': 'تكامل أودو',
    'Client Feedback': 'آراء العملاء',
    'Follow Us': 'تابعنا',
    LinkedIn: 'لينكدإن',
    Twitter: 'تويتر',
    Instagram: 'إنستغرام',
    Facebook: 'فيسبوك',
    YouTube: 'يوتيوب',
    'Privacy Policcentery | Terms & Conditions | Cookie Policy':
      'سياسة الخصوصية | الشروط والأحكام | سياسة الكوكيز',
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
