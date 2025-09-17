import type { Locale } from "./i18n";

export const dictionary = {
  en: {
    metaTitle: "CareAI - AI-Powered Healthcare Solutions",
    metaDescription: "AI companion for seniors with medication reminders, health check-ins, and SOS alerts. Transform patient care with intelligent automation and predictive analytics.",
    hero: {
      title: "AI-Powered Healthcare Solutions",
      subtitle: "Transform patient care with intelligent automation, predictive analytics, and seamless integration across all healthcare systems.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Learn More"
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Simple, effective AI companionship in three steps",
      steps: [
        {
          title: "Talk",
          description: "The AI companion checks in, listens, and reminds.",
          icon: "💬"
        },
        {
          title: "Nudge", 
          description: "Timely medication and hydration prompts.",
          icon: "⏰"
        },
        {
          title: "Protect",
          description: "SOS alerts family and care teams instantly.",
          icon: "🛡️"
        }
      ]
    },
    features: {
      title: "Key Features",
      subtitle: "Comprehensive AI solutions that transform healthcare delivery",
      items: [
        { title: "AI Diagnostics", description: "Advanced diagnostic assistance with 95%+ accuracy", icon: "🔬" },
        { title: "Smart Scheduling", description: "Intelligent appointment booking and resource optimization", icon: "📅" },
        { title: "Patient Analytics", description: "Comprehensive patient insights and predictive modeling", icon: "📊" },
        { title: "Integration Hub", description: "Seamless connection with existing healthcare systems", icon: "🔗" }
      ]
    },
    pricing: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your needs and your family",
      note: "Consumer-focused pricing for seniors and families"
    },
    partners: {
      doctors: {
        title: "For Doctors & Clinics",
        subtitle: "Reduce missed doses, increase adherence visibility, exportable summaries—without adding clinic workload.",
        valueProps: [
          "Reduce missed-dose rates by up to 30–40%",
          "Automated check-ins and escalation rules", 
          "CSV export; EHR integration roadmap"
        ],
        workflow: [
          "Patient enrollment",
          "Daily AI check-ins",
          "Adherence monitoring",
          "Provider dashboard"
        ]
      },
      hospitals: {
        title: "For Hospitals & Health Systems",
        subtitle: "Post-discharge support that lowers readmissions through daily nudges and caregiver visibility.",
        valueProps: [
          "Shorter readmissions through adherence + hydration nudges",
          "Post-discharge care plans with family visibility",
          "Integration with existing care management systems"
        ],
        workflow: [
          "Discharge planning",
          "Family onboarding",
          "Daily health checks",
          "Care team alerts"
        ]
      },
      insurance: {
        title: "For Insurance & Payers",
        subtitle: "Adherence uplift → fewer avoidable claims. Pilot-ready cohorts and reporting.",
        valueProps: [
          "Better adherence → fewer avoidable claims",
          "Population dashboards (pilot-ready)",
          "Risk stratification and intervention targeting"
        ],
        workflow: [
          "Member identification",
          "Risk assessment",
          "Intervention delivery",
          "Outcome measurement"
        ]
      },
      charities: {
        title: "For Charities & Senior Organizations",
        subtitle: "Sponsored seats, multilingual support, 5-minute onboarding.",
        valueProps: [
          "Sponsored seats for underserved populations",
          "Multilingual support (EN/AR)",
          "Lightweight onboarding process",
          "Community health monitoring"
        ],
        workflow: [
          "Organization signup",
          "Member enrollment",
          "AI companion setup",
          "Ongoing support"
        ]
      }
    },
    about: {
      hero: {
        title: "About CareAI",
        subtitle: "We're an early-stage startup building safe, helpful AI for seniors and caregivers."
      },
      mission: {
        title: "Our Mission",
        description: "We believe every care team deserves access to simple, affordable tools that improve safety and quality of life. CareAI combines conversational AI with caregiver workflows to reduce friction and increase adherence — without pretending to replace clinical judgement."
      },
      vision: {
        title: "Our Vision",
        description: "We envision a future where every senior has a trusted digital companion that helps them live independently longer, where families feel at peace knowing their loved ones are cared for, and where healthcare partners can extend their reach while focusing on the human side of care."
      },
      partners: {
        title: "Strategic Partners",
        description: "We're actively seeking pilot partners: clinicians, senior living communities, payers, and health systems. If you're interested in co-designing features or evaluating outcomes, we'd love to talk.",
        list: [
          "Healthcare Systems & Hospitals",
          "Senior Living Communities",
          "Insurance Providers",
          "Technology Partners"
        ]
      },
      advisory: {
        title: "Advisory Board",
        description: "Our advisory board brings together experts in geriatric care, AI ethics, and healthcare technology to guide our mission and ensure we're building solutions that truly serve seniors and their families.",
        list: [
          "Dr. Sarah Johnson - Geriatric Medicine",
          "Prof. Michael Chen - AI Ethics",
          "Lisa Rodriguez - Healthcare Technology",
          "Dr. James Wilson - Senior Care Innovation"
        ]
      },
      values: {
        title: "Our Core Values",
        description: "These principles guide everything we do at CareAI, from product development to customer support.",
        list: [
          {
            title: "Empathy First",
            description: "We design with seniors and caregivers in mind, understanding their unique challenges and needs."
          },
          {
            title: "Safety & Trust",
            description: "Every feature prioritizes user safety and builds trust through transparent, reliable technology."
          },
          {
            title: "Accessibility",
            description: "Our solutions are designed to be easy to use for seniors of all technical abilities."
          },
          {
            title: "Innovation",
            description: "We continuously explore new ways AI can improve senior care and quality of life."
          },
          {
            title: "Partnership",
            description: "We believe in working together with healthcare providers, families, and seniors to create better solutions."
          },
          {
            title: "Impact",
            description: "We measure success by the positive impact on seniors' lives and their families' peace of mind."
          }
        ]
      },
      cta: {
        title: "Ready to Transform Senior Care?",
        description: "Join us in building a future where aging is embraced with confidence, dignity, and companionship.",
        primaryButton: "Contact Us",
        secondaryButton: "View Pricing"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Questions, partnerships, or press — we'd love to hear from you.",
      submit: "Send Message"
    },
    onboarding: {
      title: "Start Your CareAI Journey",
      subtitle: "Tell us about yourself to get personalized recommendations",
      steps: {
        role: "Choose Your Role",
        details: "Tell Us More",
        success: "Welcome to CareAI!"
      },
      roles: {
        senior: {
          title: "I'm a Senior",
          subtitle: "Looking for companionship and support",
          icon: "👴"
        },
        family: {
          title: "I'm Family/Caregiver",
          subtitle: "Caring for a loved one",
          icon: "👨‍👩‍👧‍👦"
        },
        professional: {
          title: "I'm a Healthcare Professional",
          subtitle: "Improving patient care with AI",
          icon: "👨‍⚕️"
        }
      },
      fields: {
        basic: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email Address",
          phone: "Phone Number (Optional)"
        },
        senior: {
          age: "Age",
          livingSituation: "Living Situation",
          primaryConcern: "Primary Health Concern"
        },
        family: {
          relationship: "Relationship to Senior",
          seniorAge: "Senior's Age",
          careLevel: "Level of Care Needed",
          primaryConcern: "Primary Health Concern"
        },
        professional: {
          organization: "Organization Name",
          role: "Professional Role",
          organizationType: "Organization Type",
          useCase: "Primary Use Case"
        },
        consent: "I agree to the Terms of Service and Privacy Policy, and consent to CareAI contacting me about my inquiry.",
        submit: "Get Started",
        submitting: "Setting up your account..."
      },
      success: {
        title: "Welcome to CareAI!",
        subtitle: "Your account is being set up. Here's what happens next:",
        nextSteps: [
          "We'll review your information and match you with the right plan",
          "You'll receive a welcome email with next steps",
          "Our team will reach out within 24 hours to get you started",
          "Your AI companion will be ready in 2-3 business days"
        ],
        cta: "Return to Home"
      },
      cta: {
        title: "Ready to Get Started?",
        subtitle: "Join thousands of families and healthcare providers already using CareAI",
        button: "Start Your Journey"
      }
    },
    footer: {
      rights: "All rights reserved",
      links: [
        { href: "/en/legal/terms", label: "Terms" },
        { href: "/en/legal/privacy", label: "Privacy" }
      ]
    }
  },
  ar: {
    metaTitle: "كيرAI - حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
    metaDescription: "رفيق الذكاء الاصطناعي للمسنين مع تذكيرات الأدوية، فحوصات صحية يومية، وتنبيهات SOS. حسّن رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية.",
    hero: {
      title: "حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
      subtitle: "حوّل رعاية المرضى بالذكاء الاصطناعي والتحليلات التنبؤية والتكامل السلس عبر جميع أنظمة الرعاية الصحية.",
      ctaPrimary: "ابدأ الآن",
      ctaSecondary: "اعرف المزيد"
    },
    howItWorks: {
      title: "كيف يعمل",
      subtitle: "رفقة الذكاء الاصطناعي البسيطة والفعالة في ثلاث خطوات",
      steps: [
        {
          title: "تحدث",
          description: "يراجع رفيق الذكاء الاصطناعي، يستمع، ويذكر.",
          icon: "💬"
        },
        {
          title: "ذكر",
          description: "تذكيرات في الوقت المناسب للأدوية والترطيب.",
          icon: "⏰"
        },
        {
          title: "حمي",
          description: "تنبيهات SOS تنبه العائلة وفريق الرعاية فوراً.",
          icon: "🛡️"
        }
      ]
    },
    features: {
      title: "المميزات الرئيسية",
      subtitle: "حلول شاملة للذكاء الاصطناعي تحوّل تقديم الرعاية الصحية",
      items: [
        { title: "تشخيص الذكاء الاصطناعي", description: "مساعدة تشخيصية متقدمة بدقة 95%+", icon: "🔬" },
        { title: "جدولة ذكية", description: "حجز المواعيد الذكي وتحسين الموارد", icon: "📅" },
        { title: "تحليلات المرضى", description: "رؤى شاملة للمرضى والنمذجة التنبؤية", icon: "📊" },
        { title: "محور التكامل", description: "اتصال سلس مع أنظمة الرعاية الصحية الموجودة", icon: "🔗" }
      ]
    },
    pricing: {
      title: "أسعار بسيطة وشفافة",
      subtitle: "اختر الخطة التي تناسب احتياجاتك واحتياجات عائلتك",
      note: "أسعار تركز على المستهلك للمسنين والعائلات"
    },
    partners: {
      doctors: {
        title: "للأطباء والعيادات",
        subtitle: "قلل الجرعات المفقودة، زد رؤية الالتزام، ملخصات قابلة للتصدير—بدون إضافة عبء عمل العيادة.",
        valueProps: [
          "قلل معدلات الجرعات المفقودة بنسبة تصل إلى 30-40%",
          "فحوصات آلية وقواعد تصعيد",
          "تصدير CSV؛ خارطة طريق تكامل EHR"
        ],
        workflow: [
          "تسجيل المريض",
          "فحوصات الذكاء الاصطناعي اليومية",
          "مراقبة الالتزام",
          "لوحة تحكم المزود"
        ]
      },
      hospitals: {
        title: "للمستشفيات وأنظمة الرعاية الصحية",
        subtitle: "دعم ما بعد الخروج يقلل إعادة القبول من خلال التذكيرات اليومية ورؤية مقدم الرعاية.",
        valueProps: [
          "إعادة قبول أقصر من خلال الالتزام + تذكيرات الترطيب",
          "خطط رعاية ما بعد الخروج مع رؤية العائلة",
          "التكامل مع أنظمة إدارة الرعاية الموجودة"
        ],
        workflow: [
          "تخطيط الخروج",
          "إعداد العائلة",
          "فحوصات صحية يومية",
          "تنبيهات فريق الرعاية"
        ]
      },
      insurance: {
        title: "للتأمين والمدفوعين",
        subtitle: "رفع الالتزام → مطالبات أقل قابلة للتجنب. مجموعات جاهزة للاختبار والتقارير.",
        valueProps: [
          "التزام أفضل → مطالبات أقل قابلة للتجنب",
          "لوحات تحكم السكانية (جاهزة للاختبار)",
          "التصنيف حسب المخاطر واستهداف التدخل"
        ],
        workflow: [
          "تحديد الأعضاء",
          "تقييم المخاطر",
          "تقديم التدخل",
          "قياس النتائج"
        ]
      },
      charities: {
        title: "للجمعيات الخيرية ومنظمات المسنين",
        subtitle: "مقاعد مدعومة، دعم متعدد اللغات، إعداد في 5 دقائق.",
        valueProps: [
          "مقاعد مدعومة للسكان المحرومين",
          "دعم متعدد اللغات (EN/AR)",
          "عملية إعداد خفيفة",
          "مراقبة صحة المجتمع"
        ],
        workflow: [
          "تسجيل المنظمة",
          "تسجيل الأعضاء",
          "إعداد رفيق الذكاء الاصطناعي",
          "دعم مستمر"
        ]
      }
    },
    about: {
      hero: {
        title: "نبذة عن كيرAI",
        subtitle: "نحن شركة ناشئة في مرحلة مبكرة نبني حلول ذكاء اصطناعي آمنة ومفيدة لكبار السن ومقدمي الرعاية."
      },
      mission: {
        title: "رسالتنا",
        description: "نؤمن بأن لكل فريق رعاية الحق في أدوات بسيطة وميسورة التكلفة تحسّن السلامة وجودة الحياة. تجمع CareAI بين المحادثة الذكية وتدفقات عمل مقدمي الرعاية لتقليل التعقيد وزيادة الالتزام — دون ادعاء استبدال الحكم السريري."
      },
      vision: {
        title: "رؤيتنا",
        description: "نحن نرى مستقبلاً حيث يمتلك كل مسن معيار إلكتروني موثوق يساعده على العيش بشكل مستقل أطول، حيث تشعر العائلات بسلامة معرفتهن بأحبائهن، وحيث يمكن لشركاء الرعاية الصحية توسيع نطاقهم أثناء التركيز على الجانب البشري للرعاية."
      },
      partners: {
        title: "شراكات استراتيجية",
        description: "نبحث عن شركاء لبرامج تجريبية: أطباء، دور رعاية، شركات تأمين وأنظمة صحية. إذا كنت مهتماً بتطوير المزايا أو قياس النتائج معنا، يسعدنا التواصل.",
        list: [
          "أنظمة الرعاية الصحية والمستشفيات",
          "مجتمعات الرعاية المستقلة",
          "شركات التأمين",
          "شركات التكنولوجيا"
        ]
      },
      advisory: {
        title: "مجلس استشاري",
        description: "يجمع مجلس استشارينا معاً خبراء في الرعاية الجريرية، أخلاقيات الذكاء الاصطناعي، وتكنولوجيات الرعاية الصحية لتوجيه مهمتنا وضمان بناء حلول تخدم كبار السن وعائلاتهم بشكل حقيقي.",
        list: [
          "د. سارة جونسون - طب جريري",
          "د. مايكل تشين - أخلاقيات الذكاء الاصطناعي",
          "ليزا رودريغوز - تكنولوجيات الرعاية الصحية",
          "د. جيمس ويلسون - تطوير الرعاية المستقلة"
        ]
      },
      values: {
        title: "قيمنا الأساسية",
        description: "هذه المبادئ توجه كل ما نقوم به في كيرAI، من تطوير المنتج إلى دعم العملاء.",
        list: [
          {
            title: "التعاطف أولاً",
            description: "نصمم بتصميم مع كبار السن ومقدمي الرعاية، فهم التحديات والاحتياجات الفريدة."
          },
          {
            title: "السلامة والثقة",
            description: "كل ميزة تركز على سلامة المستخدم وتبني الثقة من خلال تقنية شفافة وموثوقة."
          },
          {
            title: "الوصولية",
            description: "حلولنا مصممة لتكون سهلة الاستخدام لكبار السن بأي مستوى تقني."
          },
          {
            title: "الابتكار",
            description: "نستكشف باستمرار طرق جديدة لكيفية تحسين الرعاية الجريرية وجودة الحياة."
          },
          {
            title: "الشراكة",
            description: "نؤمن بالعمل مع شركاء الرعاية الصحية، العائلات، وكبار السن لخلق حلول أفضل."
          },
          {
            title: "التأثير",
            description: "نقيس النجاح بالتأثير الإيجابي على حياة كبار السن وسلامة أفراد عائلتهم."
          }
        ]
      },
      cta: {
        title: "هل أنت مستعد لتحويل الرعاية الجريرية؟",
        description: "انضم إلى الرحلة معنا لبناء مستقبل حيث يتم قبول التقدم بالثقة والأدوار والرفقة.",
        primaryButton: "تواصل معنا",
        secondaryButton: "عرض الأسعار"
      }
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "أسئلة، شراكات، أو صحافة — نود أن نسمع منك.",
      submit: "إرسال الرسالة"
    },
    onboarding: {
      title: "ابدأ رحلة كيرAI",
      subtitle: "أخبرنا عن نفسك للحصول على توصيات مخصصة",
      steps: {
        role: "اختر دورك",
        details: "أخبرنا المزيد",
        success: "مرحباً بك في كيرAI!"
      },
      roles: {
        senior: {
          title: "أنا مسن",
          subtitle: "أبحث عن الرفقة والدعم",
          icon: "👴"
        },
        family: {
          title: "أنا عائلة/مقدم رعاية",
          subtitle: "أرعى أحد الأحباء",
          icon: "👨‍👩‍👧‍👦"
        },
        professional: {
          title: "أنا محترف رعاية صحية",
          subtitle: "أحسن رعاية المرضى بالذكاء الاصطناعي",
          icon: "👨‍⚕️"
        }
      },
      fields: {
        basic: {
          firstName: "الاسم الأول",
          lastName: "اسم العائلة",
          email: "عنوان البريد الإلكتروني",
          phone: "رقم الهاتف (اختياري)"
        },
        senior: {
          age: "العمر",
          livingSituation: "وضع المعيشة",
          primaryConcern: "المخاوف الصحية الأساسية"
        },
        family: {
          relationship: "العلاقة بالمسن",
          seniorAge: "عمر المسن",
          careLevel: "مستوى الرعاية المطلوبة",
          primaryConcern: "المخاوف الصحية الأساسية"
        },
        professional: {
          organization: "اسم المنظمة",
          role: "الدور المهني",
          organizationType: "نوع المنظمة",
          useCase: "حالة الاستخدام الأساسية"
        },
        consent: "أوافق على شروط الخدمة وسياسة الخصوصية، وأوافق على أن يتصل بي كيرAI بخصوص استفساري.",
        submit: "ابدأ الآن",
        submitting: "إعداد حسابك..."
      },
      success: {
        title: "مرحباً بك في كيرAI!",
        subtitle: "يتم إعداد حسابك. إليك ما يحدث بعد ذلك:",
        nextSteps: [
          "سنراجع معلوماتك ونطابقك مع الخطة الصحيحة",
          "ستتلقى بريد إلكتروني ترحيبي مع الخطوات التالية",
          "سيتواصل فريقنا معك خلال 24 ساعة لبدء العمل",
          "سيكون رفيق الذكاء الاصطناعي جاهزاً في 2-3 أيام عمل"
        ],
        cta: "العودة إلى الصفحة الرئيسية"
      },
      cta: {
        title: "هل أنت مستعد للبدء؟",
        subtitle: "انضم إلى آلاف العائلات ومقدمي الرعاية الصحية الذين يستخدمون كيرAI بالفعل",
        button: "ابدأ رحلتك"
      }
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      links: [
        { href: "/ar/legal/terms", label: "الشروط" },
        { href: "/ar/legal/privacy", label: "الخصوصية" }
      ]
    }
  },
  es: {
    metaTitle: "CareAI - Soluciones de Salud con IA",
    metaDescription: "Compañero de IA para personas mayores con recordatorios de medicamentos, controles de salud y alertas SOS.",
    hero: {
      title: "Soluciones de Salud Impulsadas por IA",
      subtitle: "Transforma la atención al paciente con automatización inteligente, análisis predictivo e integración perfecta en todos los sistemas de salud.",
      ctaPrimary: "Comenzar",
      ctaSecondary: "Saber Más"
    },
    howItWorks: {
      title: "Cómo funciona",
      subtitle: "Compañía de IA simple y efectiva en tres pasos",
      steps: [
        {
          title: "Hablar",
          description: "El compañero de IA se conecta, escucha y recuerda.",
          icon: "💬"
        },
        {
          title: "Recordar",
          description: "Recordatorios oportunos de medicamentos e hidratación.",
          icon: "⏰"
        },
        {
          title: "Proteger",
          description: "Alertas SOS notifican a la familia y equipos de cuidado al instante.",
          icon: "🛡️"
        }
      ]
    },
    features: {
      title: "Características Principales",
      subtitle: "Soluciones integrales de IA que transforman la prestación de atención médica",
      items: [
        { title: "Diagnósticos de IA", description: "Asistencia diagnóstica avanzada con 95%+ de precisión", icon: "🔬" },
        { title: "Programación Inteligente", description: "Reserva de citas inteligente y optimización de recursos", icon: "📅" },
        { title: "Analíticas de Pacientes", description: "Información integral del paciente y modelado predictivo", icon: "📊" },
        { title: "Centro de Integración", description: "Conexión perfecta con sistemas de salud existentes", icon: "🔗" }
      ]
    },
    pricing: {
      title: "Precios Simples y Transparentes",
      subtitle: "Elige el plan que se adapte a tus necesidades y a tu familia",
      note: "Precios centrados en el consumidor para personas mayores y familias"
    },
    partners: {
      doctors: {
        title: "Para Médicos y Clínicas",
        subtitle: "Reduce dosis perdidas, aumenta visibilidad de adherencia, resúmenes exportables—sin agregar carga de trabajo a la clínica.",
        valueProps: [
          "Reduce tasas de dosis perdidas hasta 30-40%",
          "Verificaciones automáticas y reglas de escalación",
          "Exportación CSV; hoja de ruta de integración EHR"
        ],
        workflow: [
          "Inscripción del paciente",
          "Verificaciones diarias de IA",
          "Monitoreo de adherencia",
          "Panel del proveedor"
        ]
      },
      hospitals: {
        title: "Para Hospitales y Sistemas de Salud",
        subtitle: "Soporte post-alta que reduce readmisiones a través de recordatorios diarios y visibilidad del cuidador.",
        valueProps: [
          "Readmisiones más cortas a través de recordatorios de adherencia + hidratación",
          "Planes de cuidado post-alta con visibilidad familiar",
          "Integración con sistemas de gestión de cuidado existentes"
        ],
        workflow: [
          "Planificación de alta",
          "Incorporación familiar",
          "Verificaciones de salud diarias",
          "Alertas del equipo de cuidado"
        ]
      },
      insurance: {
        title: "Para Seguros y Pagadores",
        subtitle: "Mejora de adherencia → menos reclamos evitables. Cohortes listas para pilotos e informes.",
        valueProps: [
          "Mejor adherencia → menos reclamos evitables",
          "Paneles poblacionales (listos para pilotos)",
          "Estratificación de riesgo y focalización de intervenciones"
        ],
        workflow: [
          "Identificación de miembros",
          "Evaluación de riesgo",
          "Entrega de intervenciones",
          "Medición de resultados"
        ]
      },
      charities: {
        title: "Para Organizaciones Benéficas y de Personas Mayores",
        subtitle: "Asientos patrocinados, soporte multilingüe, incorporación en 5 minutos.",
        valueProps: [
          "Asientos patrocinados para poblaciones desatendidas",
          "Soporte multilingüe (ES/EN)",
          "Proceso de incorporación ligero",
          "Monitoreo de salud comunitaria"
        ],
        workflow: [
          "Registro de la organización",
          "Inscripción de miembros",
          "Configuración del compañero de IA",
          "Soporte continuo"
        ]
      }
    },
    about: {
      hero: {
        title: "Acerca de CareAI",
        subtitle: "Somos una startup en etapa temprana construyendo IA segura y útil para personas mayores y cuidadores."
      },
      mission: {
        title: "Nuestra Misión",
        description: "Creemos que cada equipo de cuidado merece acceso a herramientas simples y asequibles que mejoren la seguridad y la calidad de vida. CareAI combina IA conversacional con flujos de trabajo de cuidadores para reducir la fricción y aumentar la adherencia—sin pretender reemplazar el juicio clínico."
      },
      vision: {
        title: "Nuestra Visión",
        description: "Imaginamos un futuro donde cada persona mayor tenga un compañero digital confiable que le ayude a vivir independientemente por más tiempo, donde las familias se sientan en paz sabiendo que sus seres queridos están cuidados, y donde los socios de salud puedan extender su alcance mientras se enfocan en el lado humano del cuidado."
      },
      partners: {
        title: "Socios Estratégicos",
        description: "Buscamos activamente socios piloto: clínicos, comunidades de vida independiente, pagadores y sistemas de salud. Si estás interesado en co-diseñar características o evaluar resultados, nos encantaría hablar.",
        list: [
          "Sistemas de Salud y Hospitales",
          "Comunidades de Vida Independiente",
          "Proveedores de Seguros",
          "Socios Tecnológicos"
        ]
      },
      advisory: {
        title: "Consejo Asesor",
        description: "Nuestro consejo asesor reúne a expertos en cuidado geriátrico, ética de IA y tecnología de salud para guiar nuestra misión y asegurar que construyamos soluciones que realmente sirvan a las personas mayores y sus familias.",
        list: [
          "Dra. Sarah Johnson - Medicina Geriátrica",
          "Prof. Michael Chen - Ética de IA",
          "Lisa Rodriguez - Tecnología de Salud",
          "Dr. James Wilson - Innovación en Cuidado de Personas Mayores"
        ]
      },
      values: {
        title: "Nuestros Valores Fundamentales",
        description: "Estos principios guían todo lo que hacemos en CareAI, desde el desarrollo de productos hasta el soporte al cliente.",
        list: [
          {
            title: "Empatía Primero",
            description: "Diseñamos pensando en personas mayores y cuidadores, entendiendo sus desafíos y necesidades únicos."
          },
          {
            title: "Seguridad y Confianza",
            description: "Cada característica prioriza la seguridad del usuario y construye confianza a través de tecnología transparente y confiable."
          },
          {
            title: "Accesibilidad",
            description: "Nuestras soluciones están diseñadas para ser fáciles de usar para personas mayores de todas las habilidades técnicas."
          },
          {
            title: "Innovación",
            description: "Exploramos continuamente nuevas formas en que la IA puede mejorar el cuidado de personas mayores y la calidad de vida."
          },
          {
            title: "Asociación",
            description: "Creemos en trabajar juntos con proveedores de salud, familias y personas mayores para crear mejores soluciones."
          },
          {
            title: "Impacto",
            description: "Medimos el éxito por el impacto positivo en las vidas de las personas mayores y la paz mental de sus familias."
          }
        ]
      },
      cta: {
        title: "¿Listo para Transformar el Cuidado de Personas Mayores?",
        description: "Únete a nosotros en la construcción de un futuro donde el envejecimiento se abrace con confianza, dignidad y compañía.",
        primaryButton: "Contáctanos",
        secondaryButton: "Ver Precios"
      }
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Preguntas, asociaciones o prensa — nos encantaría saber de ti.",
      submit: "Enviar Mensaje"
    },
    onboarding: {
      title: "Comienza tu Viaje con CareAI",
      subtitle: "Cuéntanos sobre ti para obtener recomendaciones personalizadas",
      steps: {
        role: "Elige tu Rol",
        details: "Cuéntanos Más",
        success: "¡Bienvenido a CareAI!"
      },
      roles: {
        senior: {
          title: "Soy una Persona Mayor",
          subtitle: "Buscando compañía y apoyo",
          icon: "👴"
        },
        family: {
          title: "Soy Familia/Cuidador",
          subtitle: "Cuidando a un ser querido",
          icon: "👨‍👩‍👧‍👦"
        },
        professional: {
          title: "Soy un Profesional de la Salud",
          subtitle: "Mejorando la atención al paciente con IA",
          icon: "👨‍⚕️"
        }
      },
      fields: {
        basic: {
          firstName: "Nombre",
          lastName: "Apellido",
          email: "Dirección de Correo Electrónico",
          phone: "Número de Teléfono (Opcional)"
        },
        senior: {
          age: "Edad",
          livingSituation: "Situación de Vivienda",
          primaryConcern: "Preocupación de Salud Primaria"
        },
        family: {
          relationship: "Relación con la Persona Mayor",
          seniorAge: "Edad de la Persona Mayor",
          careLevel: "Nivel de Cuidado Necesario",
          primaryConcern: "Preocupación de Salud Primaria"
        },
        professional: {
          organization: "Nombre de la Organización",
          role: "Rol Profesional",
          organizationType: "Tipo de Organización",
          useCase: "Caso de Uso Primario"
        },
        consent: "Acepto los Términos de Servicio y Política de Privacidad, y consiento que CareAI me contacte sobre mi consulta.",
        submit: "Comenzar",
        submitting: "Configurando tu cuenta..."
      },
      success: {
        title: "¡Bienvenido a CareAI!",
        subtitle: "Tu cuenta se está configurando. Aquí está lo que sucede después:",
        nextSteps: [
          "Revisaremos tu información y te emparejaremos con el plan correcto",
          "Recibirás un correo electrónico de bienvenida con los próximos pasos",
          "Nuestro equipo se pondrá en contacto contigo en 24 horas para comenzar",
          "Tu compañero de IA estará listo en 2-3 días hábiles"
        ],
        cta: "Volver al Inicio"
      },
      cta: {
        title: "¿Listo para Comenzar?",
        subtitle: "Únete a miles de familias y proveedores de salud que ya usan CareAI",
        button: "Comienza tu Viaje"
      }
    },
    footer: {
      rights: "Todos los derechos reservados",
      links: [
        { href: "/es/legal/terms", label: "Términos" },
        { href: "/es/legal/privacy", label: "Privacidad" }
      ]
    }
  },
  fr: {
    metaTitle: "CareAI - Solutions de Santé Alimentées par l'IA",
    metaDescription: "Compagnon IA pour les seniors avec rappels de médicaments, contrôles de santé et alertes SOS.",
    hero: {
      title: "Solutions de Santé Alimentées par l'IA",
      subtitle: "Transformez les soins aux patients avec l'automatisation intelligente, l'analyse prédictive et l'intégration parfaite dans tous les systèmes de santé.",
      ctaPrimary: "Commencer",
      ctaSecondary: "En Savoir Plus"
    },
    howItWorks: {
      title: "Comment ça marche",
      subtitle: "Compagnie IA simple et efficace en trois étapes",
      steps: [
        {
          title: "Parler",
          description: "Le compagnon IA se connecte, écoute et rappelle.",
          icon: "💬"
        },
        {
          title: "Rappeler",
          description: "Rappels opportuns de médicaments et d'hydratation.",
          icon: "⏰"
        },
        {
          title: "Protéger",
          description: "Alertes SOS notifient la famille et les équipes de soins instantanément.",
          icon: "🛡️"
        }
      ]
    },
    features: {
      title: "Fonctionnalités Principales",
      subtitle: "Solutions IA complètes qui transforment la prestation de soins de santé",
      items: [
        { title: "Diagnostics IA", description: "Assistance diagnostique avancée avec 95%+ de précision", icon: "🔬" },
        { title: "Planification Intelligente", description: "Réservation de rendez-vous intelligente et optimisation des ressources", icon: "📅" },
        { title: "Analyses des Patients", description: "Informations complètes sur les patients et modélisation prédictive", icon: "📊" },
        { title: "Centre d'Intégration", description: "Connexion parfaite avec les systèmes de santé existants", icon: "🔗" }
      ]
    },
    pricing: {
      title: "Prix Simples et Transparents",
      subtitle: "Choisissez le plan qui correspond à vos besoins et à votre famille",
      note: "Prix centrés sur le consommateur pour les seniors et les familles"
    },
    partners: {
      doctors: {
        title: "Pour les Médecins et les Cliniques",
        subtitle: "Réduisez les doses manquées, augmentez la visibilité de l'adhérence, résumés exportables—sans ajouter de charge de travail à la clinique.",
        valueProps: [
          "Réduisez les taux de doses manquées jusqu'à 30-40%",
          "Vérifications automatiques et règles d'escalade",
          "Exportation CSV; feuille de route d'intégration EHR"
        ],
        workflow: [
          "Inscription du patient",
          "Vérifications quotidiennes de l'IA",
          "Surveillance de l'adhérence",
          "Tableau de bord du fournisseur"
        ]
      },
      hospitals: {
        title: "Pour les Hôpitaux et les Systèmes de Santé",
        subtitle: "Support post-décharge qui réduit les réadmissions grâce aux rappels quotidiens et à la visibilité des soignants.",
        valueProps: [
          "Réadmissions plus courtes grâce aux rappels d'adhérence + hydratation",
          "Plans de soins post-décharge avec visibilité familiale",
          "Intégration avec les systèmes de gestion des soins existants"
        ],
        workflow: [
          "Planification de la décharge",
          "Intégration familiale",
          "Vérifications de santé quotidiennes",
          "Alertes de l'équipe de soins"
        ]
      },
      insurance: {
        title: "Pour les Assurances et les Payeurs",
        subtitle: "Amélioration de l'adhérence → moins de réclamations évitables. Cohortes prêtes pour les pilotes et rapports.",
        valueProps: [
          "Meilleure adhérence → moins de réclamations évitables",
          "Tableaux de bord de population (prêts pour les pilotes)",
          "Stratification des risques et ciblage des interventions"
        ],
        workflow: [
          "Identification des membres",
          "Évaluation des risques",
          "Livraison des interventions",
          "Mesure des résultats"
        ]
      },
      charities: {
        title: "Pour les Organisations Caritatives et les Organisations de Seniors",
        subtitle: "Sièges parrainés, support multilingue, intégration en 5 minutes.",
        valueProps: [
          "Sièges parrainés pour les populations mal desservies",
          "Support multilingue (FR/EN)",
          "Processus d'intégration léger",
          "Surveillance de la santé communautaire"
        ],
        workflow: [
          "Inscription de l'organisation",
          "Inscription des membres",
          "Configuration du compagnon IA",
          "Support continu"
        ]
      }
    },
    about: {
      hero: {
        title: "À Propos de CareAI",
        subtitle: "Nous sommes une startup en phase précoce qui construit une IA sûre et utile pour les seniors et les soignants."
      },
      mission: {
        title: "Notre Mission",
        description: "Nous croyons que chaque équipe de soins mérite l'accès à des outils simples et abordables qui améliorent la sécurité et la qualité de vie. CareAI combine l'IA conversationnelle avec les flux de travail des soignants pour réduire la friction et augmenter l'adhérence—sans prétendre remplacer le jugement clinique."
      },
      vision: {
        title: "Notre Vision",
        description: "Nous imaginons un avenir où chaque senior a un compagnon numérique de confiance qui l'aide à vivre plus longtemps de manière indépendante, où les familles se sentent en paix sachant que leurs proches sont soignés, et où les partenaires de santé peuvent étendre leur portée tout en se concentrant sur l'aspect humain des soins."
      },
      partners: {
        title: "Partenaires Stratégiques",
        description: "Nous recherchons activement des partenaires pilotes: cliniciens, communautés de vie autonome, payeurs et systèmes de santé. Si vous êtes intéressé par la co-conception de fonctionnalités ou l'évaluation des résultats, nous aimerions parler.",
        list: [
          "Systèmes de Santé et Hôpitaux",
          "Communautés de Vie Autonome",
          "Fournisseurs d'Assurance",
          "Partenaires Technologiques"
        ]
      },
      advisory: {
        title: "Conseil Consultatif",
        description: "Notre conseil consultatif réunit des experts en soins gériatriques, en éthique de l'IA et en technologie de la santé pour guider notre mission et nous assurer que nous construisons des solutions qui servent vraiment les seniors et leurs familles.",
        list: [
          "Dr. Sarah Johnson - Médecine Gériatrique",
          "Prof. Michael Chen - Éthique de l'IA",
          "Lisa Rodriguez - Technologie de la Santé",
          "Dr. James Wilson - Innovation en Soins aux Seniors"
        ]
      },
      values: {
        title: "Nos Valeurs Fondamentales",
        description: "Ces principes guident tout ce que nous faisons chez CareAI, du développement de produits au support client.",
        list: [
          {
            title: "Empathie d'Abord",
            description: "Nous concevons en pensant aux seniors et aux soignants, en comprenant leurs défis et besoins uniques."
          },
          {
            title: "Sécurité et Confiance",
            description: "Chaque fonctionnalité priorise la sécurité de l'utilisateur et construit la confiance grâce à une technologie transparente et fiable."
          },
          {
            title: "Accessibilité",
            description: "Nos solutions sont conçues pour être faciles à utiliser pour les seniors de toutes les capacités techniques."
          },
          {
            title: "Innovation",
            description: "Nous explorons continuellement de nouvelles façons dont l'IA peut améliorer les soins aux seniors et la qualité de vie."
          },
          {
            title: "Partenariat",
            description: "Nous croyons en travaillant ensemble avec les fournisseurs de santé, les familles et les seniors pour créer de meilleures solutions."
          },
          {
            title: "Impact",
            description: "Nous mesurons le succès par l'impact positif sur la vie des seniors et la tranquillité d'esprit de leurs familles."
          }
        ]
      },
      cta: {
        title: "Prêt à Transformer les Soins aux Seniors?",
        description: "Rejoignez-nous dans la construction d'un avenir où le vieillissement est embrassé avec confiance, dignité et compagnie.",
        primaryButton: "Contactez-nous",
        secondaryButton: "Voir les Prix"
      }
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Questions, partenariats ou presse — nous aimerions avoir de vos nouvelles.",
      submit: "Envoyer le Message"
    },
    onboarding: {
      title: "Commencez votre Voyage avec CareAI",
      subtitle: "Parlez-nous de vous pour obtenir des recommandations personnalisées",
      steps: {
        role: "Choisissez votre Rôle",
        details: "Parlez-nous Plus",
        success: "Bienvenue chez CareAI!"
      },
      roles: {
        senior: {
          title: "Je suis un Senior",
          subtitle: "À la recherche de compagnie et de soutien",
          icon: "👴"
        },
        family: {
          title: "Je suis Famille/Soignant",
          subtitle: "Prendre soin d'un être cher",
          icon: "👨‍👩‍👧‍👦"
        },
        professional: {
          title: "Je suis un Professionnel de la Santé",
          subtitle: "Améliorer les soins aux patients avec l'IA",
          icon: "👨‍⚕️"
        }
      },
      fields: {
        basic: {
          firstName: "Prénom",
          lastName: "Nom de Famille",
          email: "Adresse E-mail",
          phone: "Numéro de Téléphone (Optionnel)"
        },
        senior: {
          age: "Âge",
          livingSituation: "Situation de Logement",
          primaryConcern: "Préoccupation de Santé Principale"
        },
        family: {
          relationship: "Relation avec le Senior",
          seniorAge: "Âge du Senior",
          careLevel: "Niveau de Soins Nécessaire",
          primaryConcern: "Préoccupation de Santé Principale"
        },
        professional: {
          organization: "Nom de l'Organisation",
          role: "Rôle Professionnel",
          organizationType: "Type d'Organisation",
          useCase: "Cas d'Usage Principal"
        },
        consent: "J'accepte les Conditions de Service et la Politique de Confidentialité, et consens à ce que CareAI me contacte concernant ma demande.",
        submit: "Commencer",
        submitting: "Configuration de votre compte..."
      },
      success: {
        title: "Bienvenue chez CareAI!",
        subtitle: "Votre compte se configure. Voici ce qui se passe ensuite:",
        nextSteps: [
          "Nous examinerons vos informations et vous associerons au bon plan",
          "Vous recevrez un e-mail de bienvenue avec les prochaines étapes",
          "Notre équipe vous contactera dans les 24 heures pour commencer",
          "Votre compagnon IA sera prêt dans 2-3 jours ouvrables"
        ],
        cta: "Retour à l'Accueil"
      },
      cta: {
        title: "Prêt à Commencer?",
        subtitle: "Rejoignez des milliers de familles et de fournisseurs de santé qui utilisent déjà CareAI",
        button: "Commencez votre Voyage"
      }
    },
          footer: {
        rights: "Tous droits réservés",
        links: [
          { href: "/fr/legal/terms", label: "Conditions" },
          { href: "/fr/legal/privacy", label: "Confidentialité" }
        ]
      }
    },
    de: {
      metaTitle: "CareAI - KI-gestützte Gesundheitslösungen",
      metaDescription: "KI-Begleiter für Senioren mit Medikamentenerinnerungen, Gesundheitschecks und SOS-Alarmen.",
      hero: {
        title: "KI-gestützte Gesundheitslösungen",
        subtitle: "Transformieren Sie die Patientenversorgung mit intelligenter Automatisierung, prädiktiver Analytik und nahtloser Integration in alle Gesundheitssysteme.",
        ctaPrimary: "Jetzt Starten",
        ctaSecondary: "Mehr Erfahren"
      },
      howItWorks: {
        title: "Wie es funktioniert",
        subtitle: "Einfache, effektive KI-Begleitung in drei Schritten",
        steps: [
          {
            title: "Sprechen",
            description: "Der KI-Begleiter meldet sich, hört zu und erinnert.",
            icon: "💬"
          },
          {
            title: "Erinnern",
            description: "Zeitnahe Medikamenten- und Hydratationserinnerungen.",
            icon: "⏰"
          },
          {
            title: "Schützen",
            description: "SOS-Alarme benachrichtigen Familie und Pflegeteams sofort.",
            icon: "🛡️"
          }
        ]
      },
      features: {
        title: "Hauptfunktionen",
        subtitle: "Umfassende KI-Lösungen, die die Gesundheitsversorgung transformieren",
        items: [
          { title: "KI-Diagnostik", description: "Fortschrittliche diagnostische Unterstützung mit 95%+ Genauigkeit", icon: "🔬" },
          { title: "Intelligente Terminplanung", description: "Intelligente Terminbuchung und Ressourcenoptimierung", icon: "📅" },
          { title: "Patientenanalysen", description: "Umfassende Patientenkenntnisse und prädiktive Modellierung", icon: "📊" },
          { title: "Integrationszentrum", description: "Nahtlose Verbindung mit bestehenden Gesundheitssystemen", icon: "🔗" }
        ]
      },
      pricing: {
        title: "Einfache, transparente Preise",
        subtitle: "Wählen Sie den Plan, der zu Ihren Bedürfnissen und Ihrer Familie passt",
        note: "Verbraucherorientierte Preise für Senioren und Familien"
      },
      partners: {
        doctors: {
          title: "Für Ärzte und Kliniken",
          subtitle: "Reduzieren Sie verpasste Dosen, erhöhen Sie die Adhärenzsichtbarkeit, exportierbare Zusammenfassungen—ohne die Klinikarbeitslast zu erhöhen.",
          valueProps: [
            "Reduzieren Sie verpasste Dosenraten um bis zu 30-40%",
            "Automatisierte Check-ins und Eskalationsregeln",
            "CSV-Export; EHR-Integrations-Roadmap"
          ],
          workflow: [
            "Patientenregistrierung",
            "Tägliche KI-Check-ins",
            "Adhärenzüberwachung",
            "Anbieter-Dashboard"
          ]
        },
        hospitals: {
          title: "Für Krankenhäuser und Gesundheitssysteme",
          subtitle: "Post-Entlassungsunterstützung, die Wiederaufnahmen durch tägliche Erinnerungen und Pflegepersonensichtbarkeit reduziert.",
          valueProps: [
            "Kürzere Wiederaufnahmen durch Adhärenz- + Hydratationserinnerungen",
            "Post-Entlassungs-Pflegepläne mit Familiensichtbarkeit",
            "Integration mit bestehenden Pflegemanagementsystemen"
          ],
          workflow: [
            "Entlassungsplanung",
            "Familien-Onboarding",
            "Tägliche Gesundheitschecks",
            "Pflegeteam-Alarme"
          ]
        },
        insurance: {
          title: "Für Versicherungen und Zahler",
          subtitle: "Adhärenzsteigerung → weniger vermeidbare Ansprüche. Pilotbereite Kohorten und Berichte.",
          valueProps: [
            "Bessere Adhärenz → weniger vermeidbare Ansprüche",
            "Bevölkerungs-Dashboards (pilotbereit)",
            "Risikostratifizierung und Interventionszielsetzung"
          ],
          workflow: [
            "Mitgliederidentifikation",
            "Risikobewertung",
            "Interventionslieferung",
            "Ergebnisbewertung"
          ]
        },
        charities: {
          title: "Für Wohltätigkeitsorganisationen und Seniorenorganisationen",
          subtitle: "Gesponserte Plätze, mehrsprachige Unterstützung, 5-Minuten-Onboarding.",
          valueProps: [
            "Gesponserte Plätze für unterversorgte Bevölkerungsgruppen",
            "Mehrsprachige Unterstützung (DE/EN)",
            "Leichtgewichtiger Onboarding-Prozess",
            "Gemeinschaftsgesundheitsüberwachung"
          ],
          workflow: [
            "Organisationsregistrierung",
            "Mitgliederregistrierung",
            "KI-Begleiter-Einrichtung",
            "Laufende Unterstützung"
          ]
        }
      },
      about: {
        hero: {
          title: "Über CareAI",
          subtitle: "Wir sind ein Startup in der Frühphase, das sichere, nützliche KI für Senioren und Pflegekräfte entwickelt."
        },
        mission: {
          title: "Unsere Mission",
          description: "Wir glauben, dass jedes Pflegeteam Zugang zu einfachen, erschwinglichen Werkzeugen verdient, die Sicherheit und Lebensqualität verbessern. CareAI kombiniert konversationelle KI mit Pflegekräfte-Workflows, um Reibung zu reduzieren und Adhärenz zu erhöhen—ohne vorzugeben, klinisches Urteilsvermögen zu ersetzen."
        },
        vision: {
          title: "Unsere Vision",
          description: "Wir stellen uns eine Zukunft vor, in der jeder Senior einen vertrauenswürdigen digitalen Begleiter hat, der ihm hilft, länger unabhängig zu leben, in der sich Familien in Frieden fühlen, wenn sie wissen, dass ihre Lieben versorgt werden, und in der Gesundheitspartner ihre Reichweite erweitern können, während sie sich auf die menschliche Seite der Pflege konzentrieren."
        },
        partners: {
          title: "Strategische Partner",
          description: "Wir suchen aktiv Pilotpartner: Kliniker, Seniorenwohngemeinschaften, Zahler und Gesundheitssysteme. Wenn Sie daran interessiert sind, Funktionen mitzuentwickeln oder Ergebnisse zu bewerten, würden wir gerne sprechen.",
          list: [
            "Gesundheitssysteme und Krankenhäuser",
            "Seniorenwohngemeinschaften",
            "Versicherungsanbieter",
            "Technologiepartner"
          ]
        },
        advisory: {
          title: "Beirat",
          description: "Unser Beirat bringt Experten für Altenpflege, KI-Ethik und Gesundheitstechnologie zusammen, um unsere Mission zu leiten und sicherzustellen, dass wir Lösungen entwickeln, die wirklich Senioren und ihren Familien dienen.",
          list: [
            "Dr. Sarah Johnson - Geriatrische Medizin",
            "Prof. Michael Chen - KI-Ethik",
            "Lisa Rodriguez - Gesundheitstechnologie",
            "Dr. James Wilson - Innovation in der Seniorenpflege"
          ]
        },
        values: {
          title: "Unsere Kernwerte",
          description: "Diese Prinzipien leiten alles, was wir bei CareAI tun, von der Produktentwicklung bis zum Kundenservice.",
          list: [
            {
              title: "Empathie zuerst",
              description: "Wir gestalten mit Senioren und Pflegekräften im Sinn und verstehen ihre einzigartigen Herausforderungen und Bedürfnisse."
            },
            {
              title: "Sicherheit und Vertrauen",
              description: "Jede Funktion priorisiert die Sicherheit des Benutzers und baut Vertrauen durch transparente, zuverlässige Technologie auf."
            },
            {
              title: "Zugänglichkeit",
              description: "Unsere Lösungen sind so gestaltet, dass sie für Senioren aller technischen Fähigkeiten einfach zu verwenden sind."
            },
            {
              title: "Innovation",
              description: "Wir erkunden kontinuierlich neue Wege, wie KI die Seniorenpflege und Lebensqualität verbessern kann."
            },
            {
              title: "Partnerschaft",
              description: "Wir glauben daran, mit Gesundheitsdienstleistern, Familien und Senioren zusammenzuarbeiten, um bessere Lösungen zu schaffen."
            },
            {
              title: "Wirkung",
              description: "Wir messen den Erfolg an der positiven Wirkung auf das Leben der Senioren und dem Seelenfrieden ihrer Familien."
            }
          ]
        },
        cta: {
          title: "Bereit, die Seniorenpflege zu transformieren?",
          description: "Schließen Sie sich uns an, um eine Zukunft aufzubauen, in der das Altern mit Vertrauen, Würde und Gesellschaft umarmt wird.",
          primaryButton: "Kontaktieren Sie uns",
          secondaryButton: "Preise anzeigen"
        }
      },
      contact: {
        title: "Kontaktieren Sie uns",
        subtitle: "Fragen, Partnerschaften oder Presse — wir würden gerne von Ihnen hören.",
        submit: "Nachricht senden"
      },
      onboarding: {
        title: "Starten Sie Ihre CareAI-Reise",
        subtitle: "Erzählen Sie uns von sich, um personalisierte Empfehlungen zu erhalten",
        steps: {
          role: "Wählen Sie Ihre Rolle",
          details: "Erzählen Sie uns mehr",
          success: "Willkommen bei CareAI!"
        },
        roles: {
          senior: {
            title: "Ich bin ein Senior",
            subtitle: "Suche nach Gesellschaft und Unterstützung",
            icon: "👴"
          },
          family: {
            title: "Ich bin Familie/Pflegekraft",
            subtitle: "Sorge für einen geliebten Menschen",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "Ich bin ein Gesundheitsfachmann",
            subtitle: "Verbessere die Patientenversorgung mit KI",
            icon: "👨‍⚕️"
          }
        },
        fields: {
          basic: {
            firstName: "Vorname",
            lastName: "Nachname",
            email: "E-Mail-Adresse",
            phone: "Telefonnummer (Optional)"
          },
          senior: {
            age: "Alter",
            livingSituation: "Wohnsituation",
            primaryConcern: "Hauptgesundheitsbedenken"
          },
          family: {
            relationship: "Beziehung zum Senior",
            seniorAge: "Alter des Seniors",
            careLevel: "Benötigtes Pflegeniveau",
            primaryConcern: "Hauptgesundheitsbedenken"
          },
          professional: {
            organization: "Organisationsname",
            role: "Berufliche Rolle",
            organizationType: "Organisationstyp",
            useCase: "Hauptanwendungsfall"
          },
          consent: "Ich stimme den Nutzungsbedingungen und der Datenschutzerklärung zu und stimme zu, dass CareAI mich bezüglich meiner Anfrage kontaktiert.",
          submit: "Jetzt starten",
          submitting: "Ihr Konto wird eingerichtet..."
        },
        success: {
          title: "Willkommen bei CareAI!",
          subtitle: "Ihr Konto wird eingerichtet. Hier ist, was als nächstes passiert:",
          nextSteps: [
            "Wir überprüfen Ihre Informationen und passen Sie zum richtigen Plan ab",
            "Sie erhalten eine Willkommens-E-Mail mit den nächsten Schritten",
            "Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden, um zu beginnen",
            "Ihr KI-Begleiter wird in 2-3 Werktagen bereit sein"
          ],
          cta: "Zurück zur Startseite"
        },
        cta: {
          title: "Bereit zu starten?",
          subtitle: "Schließen Sie sich Tausenden von Familien und Gesundheitsdienstleistern an, die CareAI bereits nutzen",
          button: "Starten Sie Ihre Reise"
        }
      },
      footer: {
        rights: "Alle Rechte vorbehalten",
        links: [
          { href: "/de/legal/terms", label: "Bedingungen" },
          { href: "/de/legal/privacy", label: "Datenschutz" }
        ]
      }
    },
    zh: {
      metaTitle: "CareAI - AI驱动的健康解决方案",
      metaDescription: "面向老年人的AI伴侣，提供药物提醒、健康检查和SOS警报。",
      hero: {
        title: "AI驱动的健康解决方案",
        subtitle: "通过智能自动化、预测分析和与所有健康系统的无缝集成，转变患者护理。",
        ctaPrimary: "立即开始",
        ctaSecondary: "了解更多"
      },
      howItWorks: {
        title: "工作原理",
        subtitle: "简单有效的AI伴侣，分三个步骤",
        steps: [
          {
            title: "对话",
            description: "AI伴侣主动联系、倾听和提醒。",
            icon: "💬"
          },
          {
            title: "提醒",
            description: "及时的药物和水合提醒。",
            icon: "⏰"
          },
          {
            title: "保护",
            description: "SOS警报立即通知家人和护理团队。",
            icon: "🛡️"
          }
        ]
      },
      features: {
        title: "核心功能",
        subtitle: "全面的AI解决方案，转变医疗保健",
        items: [
          { title: "AI诊断", description: "先进的诊断支持，准确率95%+", icon: "🔬" },
          { title: "智能调度", description: "智能预约和资源优化", icon: "📅" },
          { title: "患者分析", description: "全面的患者洞察和预测建模", icon: "📊" },
          { title: "集成中心", description: "与现有健康系统的无缝连接", icon: "🔗" }
        ]
      },
      pricing: {
        title: "简单透明的定价",
        subtitle: "选择适合您和家庭需求的计划",
        note: "面向老年人和家庭的消费者友好价格"
      },
      partners: {
        doctors: {
          title: "面向医生和诊所",
          subtitle: "减少漏服剂量，增加依从性可见性，可导出摘要—无需增加诊所工作量。",
          valueProps: [
            "减少漏服率高达30-40%",
            "自动化检查和升级规则",
            "CSV导出；EHR集成路线图"
          ],
          workflow: [
            "患者注册",
            "每日AI检查",
            "依从性监控",
            "提供者仪表板"
          ]
        },
        hospitals: {
          title: "面向医院和健康系统",
          subtitle: "出院后支持，通过每日提醒和护理人员可见性减少再入院。",
          valueProps: [
            "通过依从性+水合提醒缩短再入院时间",
            "出院后护理计划，家庭可见性",
            "与现有护理管理系统的集成"
          ],
          workflow: [
            "出院规划",
            "家庭入职",
            "每日健康检查",
            "护理团队警报"
          ]
        },
        insurance: {
          title: "面向保险公司和支付方",
          subtitle: "提高依从性→减少可预防的索赔。试点就绪的队列和报告。",
          valueProps: [
            "更好的依从性→减少可预防的索赔",
            "人群仪表板（试点就绪）",
            "风险分层和干预目标设定"
          ],
          workflow: [
            "成员识别",
            "风险评估",
            "干预交付",
            "结果评估"
          ]
        },
        charities: {
          title: "面向慈善机构和老年组织",
          subtitle: "赞助名额，多语言支持，5分钟入职。",
          valueProps: [
            "为服务不足人群提供赞助名额",
            "多语言支持（中/英）",
            "轻量级入职流程",
            "社区健康监控"
          ],
          workflow: [
            "组织注册",
            "成员注册",
            "AI伴侣设置",
            "持续支持"
          ]
        }
      },
      about: {
        hero: {
          title: "关于CareAI",
          subtitle: "我们是一家早期创业公司，为老年人和护理人员开发安全有用的AI。"
        },
        mission: {
          title: "我们的使命",
          description: "我们相信每个护理团队都应该获得简单、负担得起的工具，以提高安全性和生活质量。CareAI将对话式AI与护理人员工作流程相结合，减少摩擦并提高依从性—而不假装替代临床判断。"
        },
        vision: {
          title: "我们的愿景",
          description: "我们设想一个未来，每个老年人都有一个值得信赖的数字伴侣，帮助他们更长时间独立生活，家庭在知道亲人得到照顾时感到安心，健康合作伙伴可以扩大他们的覆盖范围，同时专注于护理的人性化方面。"
        },
        partners: {
          title: "战略合作伙伴",
          description: "我们正在积极寻找试点合作伙伴：临床医生、老年生活社区、支付方和健康系统。如果您有兴趣共同开发功能或评估结果，我们很乐意交谈。",
          list: [
            "健康系统和医院",
            "老年生活社区",
            "保险提供商",
            "技术合作伙伴"
          ]
        },
        advisory: {
          title: "顾问委员会",
          description: "我们的顾问委员会汇集了老年护理、AI伦理和健康技术专家，指导我们的使命，确保我们开发真正为老年人和家庭服务的解决方案。",
          list: [
            "Dr. Sarah Johnson - 老年医学",
            "Prof. Michael Chen - AI伦理",
            "Lisa Rodriguez - 健康技术",
            "Dr. James Wilson - 老年护理创新"
          ]
        },
        values: {
          title: "我们的核心价值观",
          description: "这些原则指导我们在CareAI所做的一切，从产品开发到客户服务。",
          list: [
            {
              title: "同理心第一",
              description: "我们以老年人和护理人员为设计理念，理解他们独特的挑战和需求。"
            },
            {
              title: "安全和信任",
              description: "每个功能都优先考虑用户安全，通过透明、可靠的技术建立信任。"
            },
            {
              title: "可访问性",
              description: "我们的解决方案设计为所有技术水平的老年人都易于使用。"
            },
            {
              title: "创新",
              description: "我们不断探索AI改善老年护理和生活质量的新方法。"
            },
            {
              title: "伙伴关系",
              description: "我们相信与医疗服务提供者、家庭和老年人合作，创造更好的解决方案。"
            },
            {
              title: "影响",
              description: "我们通过改善老年人生活和家庭安心来衡量成功。"
            }
          ]
        },
        cta: {
          title: "准备好转变老年护理了吗？",
          description: "加入我们，建设一个以信心、尊严和陪伴拥抱老龄化的未来。",
          primaryButton: "联系我们",
          secondaryButton: "查看价格"
        }
      },
      contact: {
        title: "联系我们",
        subtitle: "问题、合作或媒体—我们很乐意听到您的声音。",
        submit: "发送消息"
      },
      onboarding: {
        title: "开始您的CareAI之旅",
        subtitle: "告诉我们关于您的情况，获得个性化建议",
        steps: {
          role: "选择您的角色",
          details: "告诉我们更多",
          success: "欢迎来到CareAI！"
        },
        roles: {
          senior: {
            title: "我是老年人",
            subtitle: "寻找陪伴和支持",
            icon: "👴"
          },
          family: {
            title: "我是家人/护理人员",
            subtitle: "照顾所爱的人",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "我是健康专业人士",
            subtitle: "用AI改善患者护理",
            icon: "👨‍⚕️"
          }
        },
        fields: {
          basic: {
            firstName: "名字",
            lastName: "姓氏",
            email: "电子邮件地址",
            phone: "电话号码（可选）"
          },
          senior: {
            age: "年龄",
            livingSituation: "居住情况",
            primaryConcern: "主要健康问题"
          },
          family: {
            relationship: "与老年人的关系",
            seniorAge: "老年人年龄",
            careLevel: "需要的护理水平",
            primaryConcern: "主要健康问题"
          },
          professional: {
            organization: "组织名称",
            role: "职业角色",
            organizationType: "组织类型",
            useCase: "主要使用案例"
          },
          consent: "我同意使用条款和隐私政策，并同意CareAI就我的询问联系我。",
          submit: "现在开始",
          submitting: "您的账户正在设置中..."
        },
        success: {
          title: "欢迎来到CareAI！",
          subtitle: "您的账户正在设置中。以下是接下来会发生的事情：",
          nextSteps: [
            "我们审查您的信息并匹配到合适的计划",
            "您将收到一封欢迎电子邮件，说明下一步",
            "我们的团队将在24小时内联系您开始",
            "您的AI伴侣将在2-3个工作日内准备就绪"
          ],
          cta: "返回首页"
        },
        cta: {
          title: "准备好开始了吗？",
          subtitle: "加入已经使用CareAI的数千个家庭和健康服务提供者",
          button: "开始您的旅程"
        }
      },
      footer: {
        rights: "保留所有权利",
        links: [
          { href: "/zh/legal/terms", label: "条款" },
          { href: "/zh/legal/privacy", label: "隐私" }
        ]
      }
    },
    ja: {
      metaTitle: "CareAI - AI駆動の健康ソリューション",
      metaDescription: "高齢者向けAIコンパニオン、薬のリマインダー、健康チェック、SOSアラートを提供。",
      hero: {
        title: "AI駆動の健康ソリューション",
        subtitle: "インテリジェントな自動化、予測分析、すべての健康システムとのシームレスな統合により、患者ケアを変革。",
        ctaPrimary: "今すぐ始める",
        ctaSecondary: "詳しく見る"
      },
      howItWorks: {
        title: "仕組み",
        subtitle: "シンプルで効果的なAIコンパニオン、3つのステップ",
        steps: [
          {
            title: "会話",
            description: "AIコンパニオンが積極的に連絡し、聞き取り、リマインド。",
            icon: "💬"
          },
          {
            title: "リマインド",
            description: "タイムリーな薬と水分補給のリマインダー。",
            icon: "⏰"
          },
          {
            title: "保護",
            description: "SOSアラートが家族とケアチームに即座に通知。",
            icon: "🛡️"
          }
        ]
      },
      features: {
        title: "主要機能",
        subtitle: "ヘルスケアを変革する包括的なAIソリューション",
        items: [
          { title: "AI診断", description: "95%以上の精度を持つ高度な診断サポート", icon: "🔬" },
          { title: "インテリジェントスケジューリング", description: "インテリジェントな予約とリソース最適化", icon: "📅" },
          { title: "患者分析", description: "包括的な患者インサイトと予測モデリング", icon: "📊" },
          { title: "統合ハブ", description: "既存の健康システムとのシームレスな接続", icon: "🔗" }
        ]
      },
      pricing: {
        title: "シンプルで透明な価格設定",
        subtitle: "あなたと家族のニーズに合ったプランを選択",
        note: "高齢者と家族向けの消費者フレンドリーな価格"
      },
      partners: {
        doctors: {
          title: "医師とクリニック向け",
          subtitle: "投薬漏れを減らし、コンプライアンスの可視性を向上、エクスポート可能なサマリー—クリニックの作業負荷を増やすことなく。",
          valueProps: [
            "投薬漏れ率を最大30-40%削減",
            "自動化されたチェックインとエスカレーションルール",
            "CSVエクスポート；EHR統合ロードマップ"
          ],
          workflow: [
            "患者登録",
            "日次AIチェックイン",
            "コンプライアンス監視",
            "プロバイダーダッシュボード"
          ]
        },
        hospitals: {
          title: "病院とヘルスシステム向け",
          subtitle: "日次リマインダーとケアギバーの可視性により再入院を減らす退院後サポート。",
          valueProps: [
            "コンプライアンス+水分補給リマインダーにより再入院時間を短縮",
            "家族の可視性を持つ退院後ケアプラン",
            "既存のケア管理システムとの統合"
          ],
          workflow: [
            "退院計画",
            "家族オンボーディング",
            "日次健康チェック",
            "ケアチームアラート"
          ]
        },
        insurance: {
          title: "保険会社とペイヤー向け",
          subtitle: "コンプライアンス向上→予防可能な請求の削減。パイロット準備完了のコホートとレポート。",
          valueProps: [
            "より良いコンプライアンス→予防可能な請求の削減",
            "集団ダッシュボード（パイロット準備完了）",
            "リスク層別化と介入目標設定"
          ],
          workflow: [
            "メンバー識別",
            "リスク評価",
            "介入提供",
            "結果評価"
          ]
        },
        charities: {
          title: "慈善団体と高齢者組織向け",
          subtitle: "スポンサー付きスポット、多言語サポート、5分オンボーディング。",
          valueProps: [
            "サービス不足の集団向けスポンサー付きスポット",
            "多言語サポート（日/英）",
            "軽量オンボーディングプロセス",
            "コミュニティ健康監視"
          ],
          workflow: [
            "組織登録",
            "メンバー登録",
            "AIコンパニオン設定",
            "継続的サポート"
          ]
        }
      },
      about: {
        hero: {
          title: "CareAIについて",
          subtitle: "私たちは、高齢者とケアギバーのために安全で有用なAIを開発する初期段階のスタートアップです。"
        },
        mission: {
          title: "私たちのミッション",
          description: "私たちは、すべてのケアチームが安全性と生活の質を向上させるシンプルで手頃なツールにアクセスする価値があると信じています。CareAIは、会話型AIとケアギバーのワークフローを組み合わせ、摩擦を減らし、コンプライアンスを向上させます—臨床的判断を置き換えるふりをすることなく。"
        },
        vision: {
          title: "私たちのビジョン",
          description: "私たちは、すべての高齢者がより長く独立して生活するのを助ける信頼できるデジタルコンパニオンを持ち、家族が愛する人がケアされていることを知って安心感を感じ、健康パートナーがケアの人間的側面に集中しながらリーチを拡大できる未来を想像しています。"
        },
        partners: {
          title: "戦略的パートナー",
          description: "私たちは積極的にパイロットパートナーを探しています：臨床医、高齢者生活コミュニティ、ペイヤー、ヘルスシステム。機能の共同開発や結果の評価に興味がある場合は、お話ししたいと思います。",
          list: [
            "ヘルスシステムと病院",
            "高齢者生活コミュニティ",
            "保険プロバイダー",
            "技術パートナー"
          ]
        },
        advisory: {
          title: "アドバイザリーボード",
          description: "私たちのアドバイザリーボードは、高齢者ケア、AI倫理、健康技術の専門家を集め、私たちのミッションを導き、本当に高齢者と家族に奉仕するソリューションを開発することを確実にします。",
          list: [
            "Dr. Sarah Johnson - 老年医学",
            "Prof. Michael Chen - AI倫理",
            "Lisa Rodriguez - 健康技術",
            "Dr. James Wilson - 高齢者ケアイノベーション"
          ]
        },
        values: {
          title: "私たちのコアバリュー",
          description: "これらの原則は、製品開発からカスタマーサービスまで、CareAIで行うすべてのことを導きます。",
          list: [
            {
              title: "共感第一",
              description: "私たちは高齢者とケアギバーを念頭に置いて設計し、彼らのユニークな課題とニーズを理解します。"
            },
            {
              title: "安全と信頼",
              description: "すべての機能はユーザーの安全を優先し、透明で信頼できる技術を通じて信頼を構築します。"
            },
            {
              title: "アクセシビリティ",
              description: "私たちのソリューションは、すべての技術レベルの高齢者が簡単に使用できるように設計されています。"
            },
            {
              title: "イノベーション",
              description: "私たちは、AIが高齢者ケアと生活の質を向上させる新しい方法を継続的に探求しています。"
            },
            {
              title: "パートナーシップ",
              description: "私たちは、より良いソリューションを作成するために、医療サービス提供者、家族、高齢者と協力することを信じています。"
            },
            {
              title: "インパクト",
              description: "私たちは、高齢者の生活へのポジティブな影響と家族の安心感で成功を測定します。"
            }
          ]
        },
        cta: {
          title: "高齢者ケアを変革する準備はできていますか？",
          description: "信頼、尊厳、仲間と共に老化を受け入れる未来を構築するために、私たちに参加してください。",
          primaryButton: "お問い合わせ",
          secondaryButton: "価格を見る"
        }
      },
      contact: {
        title: "お問い合わせ",
        subtitle: "質問、パートナーシップ、またはプレス—お聞かせください。",
        submit: "メッセージを送信"
      },
      onboarding: {
        title: "CareAIの旅を始めましょう",
        subtitle: "あなたについて教えて、パーソナライズされた推奨事項を受け取る",
        steps: {
          role: "あなたの役割を選択",
          details: "もっと詳しく教えて",
          success: "CareAIへようこそ！"
        },
        roles: {
          senior: {
            title: "私は高齢者です",
            subtitle: "仲間とサポートを探している",
            icon: "👴"
          },
          family: {
            title: "私は家族/ケアギバーです",
            subtitle: "愛する人の世話をしている",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "私は健康専門家です",
            subtitle: "AIで患者ケアを改善",
            icon: "👨‍⚕️"
          }
        },
        fields: {
          basic: {
            firstName: "名",
            lastName: "姓",
            email: "メールアドレス",
            phone: "電話番号（オプション）"
          },
          senior: {
            age: "年齢",
            livingSituation: "生活状況",
            primaryConcern: "主要な健康上の懸念"
          },
          family: {
            relationship: "高齢者との関係",
            seniorAge: "高齢者の年齢",
            careLevel: "必要なケアレベル",
            primaryConcern: "主要な健康上の懸念"
          },
          professional: {
            organization: "組織名",
            role: "職業上の役割",
            organizationType: "組織タイプ",
            useCase: "主要な使用事例"
          },
          consent: "利用規約とプライバシーポリシーに同意し、CareAIが私の問い合わせについて私に連絡することに同意します。",
          submit: "今すぐ始める",
          submitting: "あなたのアカウントが設定されています..."
        },
        success: {
          title: "CareAIへようこそ！",
          subtitle: "あなたのアカウントが設定されています。次に起こることは以下の通りです：",
          nextSteps: [
            "私たちはあなたの情報を確認し、適切なプランにマッチします",
            "次のステップを含むウェルカムメールを受け取ります",
            "私たちのチームは24時間以内に連絡して開始します",
            "あなたのAIコンパニオンは2-3営業日で準備完了します"
          ],
          cta: "ホームページに戻る"
        },
        cta: {
          title: "始める準備はできていますか？",
          subtitle: "すでにCareAIを使用している何千もの家族と健康サービス提供者に参加",
          button: "あなたの旅を始める"
        }
      },
      footer: {
        rights: "全著作権所有",
        links: [
          { href: "/ja/legal/terms", label: "利用規約" },
          { href: "/ja/legal/privacy", label: "プライバシー" }
        ]
      }
    },
    ko: {
      metaTitle: "CareAI - AI 기반 건강 솔루션",
      metaDescription: "노인을 위한 AI 동반자, 약물 알림, 건강 체크, SOS 경고를 제공합니다.",
      hero: {
        title: "AI 기반 건강 솔루션",
        subtitle: "지능형 자동화, 예측 분석, 모든 건강 시스템과의 원활한 통합으로 환자 케어를 혁신합니다.",
        ctaPrimary: "지금 시작하기",
        ctaSecondary: "더 알아보기"
      },
      howItWorks: {
        title: "작동 방식",
        subtitle: "간단하고 효과적인 AI 동반자, 3단계",
        steps: [
          {
            title: "대화",
            description: "AI 동반자가 적극적으로 연락하고, 듣고, 상기시킵니다.",
            icon: "💬"
          },
          {
            title: "상기",
            description: "시기적절한 약물 및 수분 섭취 알림.",
            icon: "⏰"
          },
          {
            title: "보호",
            description: "SOS 경고가 가족과 케어 팀에 즉시 알립니다.",
            icon: "🛡️"
          }
        ]
      },
      features: {
        title: "주요 기능",
        subtitle: "건강 관리를 혁신하는 포괄적인 AI 솔루션",
        items: [
          { title: "AI 진단", description: "95% 이상의 정확도를 가진 고급 진단 지원", icon: "🔬" },
          { title: "지능형 스케줄링", description: "지능형 예약 및 리소스 최적화", icon: "📅" },
          { title: "환자 분석", description: "포괄적인 환자 인사이트 및 예측 모델링", icon: "📊" },
          { title: "통합 허브", description: "기존 건강 시스템과의 원활한 연결", icon: "🔗" }
        ]
      },
      pricing: {
        title: "간단하고 투명한 가격",
        subtitle: "당신과 가족의 필요에 맞는 계획을 선택하세요",
        note: "노인과 가족을 위한 소비자 친화적 가격"
      },
      partners: {
        doctors: {
          title: "의사 및 클리닉용",
          subtitle: "약물 복용 누락을 줄이고, 순응도 가시성을 높이며, 내보낼 수 있는 요약—클리닉 업무량을 늘리지 않고.",
          valueProps: [
            "약물 복용 누락률을 최대 30-40% 감소",
            "자동화된 체크인 및 에스컬레이션 규칙",
            "CSV 내보내기; EHR 통합 로드맵"
          ],
          workflow: [
            "환자 등록",
            "일일 AI 체크인",
            "순응도 모니터링",
            "제공자 대시보드"
          ]
        },
        hospitals: {
          title: "병원 및 건강 시스템용",
          subtitle: "일일 알림 및 케어 제공자 가시성으로 재입원을 줄이는 퇴원 후 지원.",
          valueProps: [
            "순응도 + 수분 섭취 알림으로 재입원 시간 단축",
            "가족 가시성을 가진 퇴원 후 케어 계획",
            "기존 케어 관리 시스템과의 통합"
          ],
          workflow: [
            "퇴원 계획",
            "가족 온보딩",
            "일일 건강 체크",
            "케어 팀 알림"
          ]
        },
        insurance: {
          title: "보험사 및 지급자용",
          subtitle: "순응도 향상 → 예방 가능한 청구 감소. 파일럿 준비 완료된 코호트 및 보고서.",
          valueProps: [
            "더 나은 순응도 → 예방 가능한 청구 감소",
            "인구 대시보드 (파일럿 준비 완료)",
            "위험 계층화 및 개입 목표 설정"
          ],
          workflow: [
            "회원 식별",
            "위험 평가",
            "개입 제공",
            "결과 평가"
          ]
        },
        charities: {
          title: "자선 단체 및 노인 조직용",
          subtitle: "스폰서 지원 자리, 다국어 지원, 5분 온보딩.",
          valueProps: [
            "서비스 부족 인구를 위한 스폰서 지원 자리",
            "다국어 지원 (한/영)",
            "경량 온보딩 프로세스",
            "커뮤니티 건강 모니터링"
          ],
          workflow: [
            "조직 등록",
            "회원 등록",
            "AI 동반자 설정",
            "지속적인 지원"
          ]
        }
      },
      about: {
        hero: {
          title: "CareAI에 대해",
          subtitle: "우리는 노인과 케어 제공자를 위한 안전하고 유용한 AI를 개발하는 초기 단계 스타트업입니다."
        },
        mission: {
          title: "우리의 미션",
          description: "우리는 모든 케어 팀이 안전성과 삶의 질을 향상시키는 간단하고 저렴한 도구에 접근할 가치가 있다고 믿습니다. CareAI는 대화형 AI와 케어 제공자 워크플로우를 결합하여 마찰을 줄이고 순응도를 높입니다—임상적 판단을 대체하는 척하지 않고."
        },
        vision: {
          title: "우리의 비전",
          description: "우리는 모든 노인이 더 오래 독립적으로 살 수 있도록 돕는 신뢰할 수 있는 디지털 동반자를 가지고, 가족이 사랑하는 사람이 돌봄을 받고 있다는 것을 알 때 평화를 느끼며, 건강 파트너가 케어의 인간적 측면에 집중하면서 도달 범위를 확장할 수 있는 미래를 상상합니다."
        },
        partners: {
          title: "전략적 파트너",
          description: "우리는 적극적으로 파일럿 파트너를 찾고 있습니다: 임상의, 노인 생활 커뮤니티, 지급자, 건강 시스템. 기능을 공동 개발하거나 결과를 평가하는 데 관심이 있다면 이야기하고 싶습니다.",
          list: [
            "건강 시스템 및 병원",
            "노인 생활 커뮤니티",
            "보험 제공자",
            "기술 파트너"
          ]
        },
        advisory: {
          title: "자문 위원회",
          description: "우리의 자문 위원회는 노인 케어, AI 윤리, 건강 기술 전문가를 모아 우리의 미션을 안내하고, 정말로 노인과 가족을 섬기는 솔루션을 개발하도록 보장합니다.",
          list: [
            "Dr. Sarah Johnson - 노인 의학",
            "Prof. Michael Chen - AI 윤리",
            "Lisa Rodriguez - 건강 기술",
            "Dr. James Wilson - 노인 케어 혁신"
          ]
        },
        values: {
          title: "우리의 핵심 가치",
          description: "이러한 원칙은 제품 개발부터 고객 서비스까지 CareAI에서 하는 모든 것을 안내합니다.",
          list: [
            {
              title: "공감 우선",
              description: "우리는 노인과 케어 제공자를 염두에 두고 설계하며, 그들의 고유한 도전과 필요를 이해합니다."
            },
            {
              title: "안전과 신뢰",
              description: "모든 기능은 사용자 안전을 우선시하며, 투명하고 신뢰할 수 있는 기술을 통해 신뢰를 구축합니다."
            },
            {
              title: "접근성",
              description: "우리의 솔루션은 모든 기술 수준의 노인이 쉽게 사용할 수 있도록 설계되었습니다."
            },
            {
              title: "혁신",
              description: "우리는 AI가 노인 케어와 삶의 질을 향상시키는 새로운 방법을 지속적으로 탐구합니다."
            },
            {
              title: "파트너십",
              description: "우리는 더 나은 솔루션을 만들기 위해 의료 서비스 제공자, 가족, 노인과 협력하는 것을 믿습니다."
            },
            {
              title: "영향",
              description: "우리는 노인의 삶에 대한 긍정적인 영향과 가족의 평화로움으로 성공을 측정합니다."
            }
          ]
        },
        cta: {
          title: "노인 케어를 혁신할 준비가 되셨나요?",
          description: "신뢰, 존엄성, 동반과 함께 노화를 받아들이는 미래를 구축하기 위해 우리와 함께하세요.",
          primaryButton: "연락하기",
          secondaryButton: "가격 보기"
        }
      },
      contact: {
        title: "연락하기",
        subtitle: "질문, 파트너십 또는 언론—듣고 싶습니다.",
        submit: "메시지 보내기"
      },
      onboarding: {
        title: "CareAI 여정을 시작하세요",
        subtitle: "자신에 대해 알려주고 개인화된 권장사항을 받으세요",
        steps: {
          role: "역할 선택",
          details: "더 자세히 알려주세요",
          success: "CareAI에 오신 것을 환영합니다!"
        },
        roles: {
          senior: {
            title: "저는 노인입니다",
            subtitle: "동반자와 지원을 찾고 있습니다",
            icon: "👴"
          },
          family: {
            title: "저는 가족/케어 제공자입니다",
            subtitle: "사랑하는 사람을 돌보고 있습니다",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "저는 건강 전문가입니다",
            subtitle: "AI로 환자 케어 개선",
            icon: "👨‍⚕️"
          }
        },
        fields: {
          basic: {
            firstName: "이름",
            lastName: "성",
            email: "이메일 주소",
            phone: "전화번호 (선택사항)"
          },
          senior: {
            age: "나이",
            livingSituation: "거주 상황",
            primaryConcern: "주요 건강 문제"
          },
          family: {
            relationship: "노인과의 관계",
            seniorAge: "노인의 나이",
            careLevel: "필요한 케어 수준",
            primaryConcern: "주요 건강 문제"
          },
          professional: {
            organization: "조직명",
            role: "직업적 역할",
            organizationType: "조직 유형",
            useCase: "주요 사용 사례"
          },
          consent: "이용약관 및 개인정보처리방침에 동의하며, CareAI가 내 문의에 대해 연락하는 것에 동의합니다.",
          submit: "지금 시작하기",
          submitting: "계정이 설정되고 있습니다..."
        },
        success: {
          title: "CareAI에 오신 것을 환영합니다!",
          subtitle: "계정이 설정되고 있습니다. 다음에 일어날 일은 다음과 같습니다:",
          nextSteps: [
            "정보를 검토하고 적절한 계획에 맞춥니다",
            "다음 단계가 포함된 환영 이메일을 받습니다",
            "팀이 24시간 내에 연락하여 시작합니다",
            "AI 동반자가 2-3 영업일 내에 준비됩니다"
          ],
          cta: "홈페이지로 돌아가기"
        },
        cta: {
          title: "시작할 준비가 되셨나요?",
          subtitle: "이미 CareAI를 사용하고 있는 수천 개의 가족과 건강 서비스 제공자에 합류하세요",
          button: "여정 시작하기"
        }
      },
      footer: {
        rights: "모든 권리 보유",
        links: [
          { href: "/ko/legal/terms", label: "이용약관" },
          { href: "/ko/legal/privacy", label: "개인정보처리방침" }
        ]
      }
    },
    hi: {
      metaTitle: "CareAI - AI आधारित स्वास्थ्य समाधान",
      metaDescription: "वरिष्ठ नागरिकों के लिए AI साथी, दवा अनुस्मारक, स्वास्थ्य जांच, और SOS अलर्ट प्रदान करता है।",
      hero: {
        title: "AI आधारित स्वास्थ्य समाधान",
        subtitle: "बुद्धिमान स्वचालन, भविष्यवाणी विश्लेषण, और सभी स्वास्थ्य प्रणालियों के साथ निर्बाध एकीकरण के माध्यम से रोगी देखभाल को बदलें।",
        ctaPrimary: "अभी शुरू करें",
        ctaSecondary: "और जानें"
      },
      howItWorks: {
        title: "यह कैसे काम करता है",
        subtitle: "सरल, प्रभावी AI साथी तीन चरणों में",
        steps: [
          {
            title: "बात करें",
            description: "AI साथी पहल करता है, सुनता है, और याद दिलाता है।",
            icon: "💬"
          },
          {
            title: "याद दिलाएं",
            description: "समय पर दवा और जलयोजन अनुस्मारक।",
            icon: "⏰"
          },
          {
            title: "सुरक्षा",
            description: "SOS अलर्ट तुरंत परिवार और देखभाल टीमों को सूचित करते हैं।",
            icon: "🛡️"
          }
        ]
      },
      features: {
        title: "मुख्य विशेषताएं",
        subtitle: "स्वास्थ्य देखभाल को बदलने वाले व्यापक AI समाधान",
        items: [
          { title: "AI निदान", description: "95%+ सटीकता के साथ उन्नत नैदानिक समर्थन", icon: "🔬" },
          { title: "बुद्धिमान शेड्यूलिंग", description: "बुद्धिमान अपॉइंटमेंट बुकिंग और संसाधन अनुकूलन", icon: "📅" },
          { title: "रोगी विश्लेषण", description: "व्यापक रोगी अंतर्दृष्टि और भविष्यवाणी मॉडलिंग", icon: "📊" },
          { title: "एकीकरण केंद्र", description: "मौजूदा स्वास्थ्य प्रणालियों के साथ निर्बाध कनेक्शन", icon: "🔗" }
        ]
      },
      pricing: {
        title: "सरल, पारदर्शी मूल्य निर्धारण",
        subtitle: "अपनी और अपने परिवार की जरूरतों के अनुरूप योजना चुनें",
        note: "वरिष्ठ नागरिकों और परिवारों के लिए उपभोक्ता-अनुकूल मूल्य"
      },
      partners: {
        doctors: {
          title: "डॉक्टरों और क्लीनिकों के लिए",
          subtitle: "छूटी हुई खुराक कम करें, अनुपालन दृश्यता बढ़ाएं, निर्यात योग्य सारांश—क्लिनिक के कार्यभार को बढ़ाए बिना।",
          valueProps: [
            "छूटी हुई खुराक दरों को 30-40% तक कम करें",
            "स्वचालित चेक-इन और एस्केलेशन नियम",
            "CSV निर्यात; EHR एकीकरण रोडमैप"
          ],
          workflow: [
            "रोगी पंजीकरण",
            "दैनिक AI चेक-इन",
            "अनुपालन निगरानी",
            "प्रदाता डैशबोर्ड"
          ]
        },
        hospitals: {
          title: "अस्पतालों और स्वास्थ्य प्रणालियों के लिए",
          subtitle: "पोस्ट-डिस्चार्ज समर्थन जो दैनिक अनुस्मारक और देखभालकर्ता दृश्यता के माध्यम से पुनर्प्रवेश को कम करता है।",
          valueProps: [
            "अनुपालन + जलयोजन अनुस्मारक के माध्यम से कम पुनर्प्रवेश समय",
            "परिवार की दृश्यता के साथ पोस्ट-डिस्चार्ज देखभाल योजनाएं",
            "मौजूदा देखभाल प्रबंधन प्रणालियों के साथ एकीकरण"
          ],
          workflow: [
            "डिस्चार्ज योजना",
            "परिवार ऑनबोर्डिंग",
            "दैनिक स्वास्थ्य जांच",
            "देखभाल टीम अलर्ट"
          ]
        },
        insurance: {
          title: "बीमा कंपनियों और भुगतानकर्ताओं के लिए",
          subtitle: "अनुपालन में सुधार → कम रोकथाम योग्य दावे। पायलट-तैयार समूह और रिपोर्ट।",
          valueProps: [
            "बेहतर अनुपालन → कम रोकथाम योग्य दावे",
            "जनसंख्या डैशबोर्ड (पायलट-तैयार)",
            "जोखिम स्तरीकरण और हस्तक्षेप लक्ष्य निर्धारण"
          ],
          workflow: [
            "सदस्य पहचान",
            "जोखिम मूल्यांकन",
            "हस्तक्षेप वितरण",
            "परिणाम मूल्यांकन"
          ]
        },
        charities: {
          title: "दान संगठनों और वरिष्ठ संगठनों के लिए",
          subtitle: "प्रायोजित स्थान, बहुभाषी समर्थन, 5-मिनट ऑनबोर्डिंग।",
          valueProps: [
            "अल्प-सेवित आबादी के लिए प्रायोजित स्थान",
            "बहुभाषी समर्थन (हिंदी/अंग्रेजी)",
            "हल्का ऑनबोर्डिंग प्रक्रिया",
            "समुदाय स्वास्थ्य निगरानी"
          ],
          workflow: [
            "संगठन पंजीकरण",
            "सदस्य पंजीकरण",
            "AI साथी सेटअप",
            "निरंतर समर्थन"
          ]
        }
      },
      about: {
        hero: {
          title: "CareAI के बारे में",
          subtitle: "हम एक प्रारंभिक चरण का स्टार्टअप हैं जो वरिष्ठ नागरिकों और देखभालकर्ताओं के लिए सुरक्षित, उपयोगी AI विकसित करता है।"
        },
        mission: {
          title: "हमारा मिशन",
          description: "हम मानते हैं कि हर देखभाल टीम को सुरक्षा और जीवन की गुणवत्ता में सुधार करने वाले सरल, सस्ते उपकरणों तक पहुंच का अधिकार है। CareAI वार्तालाप AI को देखभालकर्ता वर्कफ्लो के साथ जोड़ता है, घर्षण को कम करने और अनुपालन को बढ़ाने के लिए—नैदानिक निर्णय को प्रतिस्थापित करने का दिखावा किए बिना।"
        },
        vision: {
          title: "हमारा विजन",
          description: "हम एक ऐसे भविष्य की कल्पना करते हैं जहां हर वरिष्ठ नागरिक के पास एक विश्वसनीय डिजिटल साथी हो जो उन्हें लंबे समय तक स्वतंत्र रहने में मदद करे, जहां परिवार शांति महसूस करें जब वे जानते हैं कि उनके प्रियजनों की देखभाल की जा रही है, और जहां स्वास्थ्य भागीदार देखभाल के मानवीय पहलू पर ध्यान केंद्रित करते हुए अपनी पहुंच का विस्तार कर सकते हैं।"
        },
        partners: {
          title: "रणनीतिक भागीदार",
          description: "हम सक्रिय रूप से पायलट भागीदारों की तलाश कर रहे हैं: नैदानिक चिकित्सक, वरिष्ठ जीवन समुदाय, भुगतानकर्ता, और स्वास्थ्य प्रणालियां। यदि आप सुविधाओं को सह-विकसित करने या परिणामों का मूल्यांकन करने में रुचि रखते हैं, तो हम बात करना चाहेंगे।",
          list: [
            "स्वास्थ्य प्रणालियां और अस्पताल",
            "वरिष्ठ जीवन समुदाय",
            "बीमा प्रदाता",
            "तकनीकी भागीदार"
          ]
        },
        advisory: {
          title: "सलाहकार बोर्ड",
          description: "हमारा सलाहकार बोर्ड वरिष्ठ देखभाल, AI नैतिकता, और स्वास्थ्य प्रौद्योगिकी के विशेषज्ञों को एक साथ लाता है, हमारे मिशन का मार्गदर्शन करने के लिए और यह सुनिश्चित करने के लिए कि हम ऐसे समाधान विकसित करें जो वास्तव में वरिष्ठ नागरिकों और उनके परिवारों की सेवा करें।",
          list: [
            "Dr. Sarah Johnson - वरिष्ठ चिकित्सा",
            "Prof. Michael Chen - AI नैतिकता",
            "Lisa Rodriguez - स्वास्थ्य प्रौद्योगिकी",
            "Dr. James Wilson - वरिष्ठ देखभाल नवाचार"
          ]
        },
        values: {
          title: "हमारे मूल मूल्य",
          description: "ये सिद्धांत CareAI में हमारे द्वारा किए गए हर काम का मार्गदर्शन करते हैं, उत्पाद विकास से लेकर ग्राहक सेवा तक।",
          list: [
            {
              title: "पहले सहानुभूति",
              description: "हम वरिष्ठ नागरिकों और देखभालकर्ताओं को ध्यान में रखकर डिजाइन करते हैं, उनकी अनूठी चुनौतियों और जरूरतों को समझते हैं।"
            },
            {
              title: "सुरक्षा और विश्वास",
              description: "हर सुविधा उपयोगकर्ता की सुरक्षा को प्राथमिकता देती है और पारदर्शी, विश्वसनीय प्रौद्योगिकी के माध्यम से विश्वास का निर्माण करती है।"
            },
            {
              title: "पहुंच",
              description: "हमारे समाधान इस तरह डिजाइन किए गए हैं कि सभी तकनीकी स्तरों के वरिष्ठ नागरिक उनका उपयोग आसानी से कर सकें।"
            },
            {
              title: "नवाचार",
              description: "हम लगातार नए तरीकों की खोज करते हैं जिनसे AI वरिष्ठ देखभाल और जीवन की गुणवत्ता में सुधार कर सकता है।"
            },
            {
              title: "साझेदारी",
              description: "हम मानते हैं कि बेहतर समाधान बनाने के लिए स्वास्थ्य सेवा प्रदाताओं, परिवारों, और वरिष्ठ नागरिकों के साथ सहयोग करना।"
            },
            {
              title: "प्रभाव",
              description: "हम वरिष्ठ नागरिकों के जीवन में सकारात्मक प्रभाव और उनके परिवारों की शांति से सफलता को मापते हैं।"
            }
          ]
        },
        cta: {
          title: "वरिष्ठ देखभाल को बदलने के लिए तैयार हैं?",
          description: "विश्वास, गरिमा, और साथ के साथ उम्र बढ़ने को गले लगाने वाले भविष्य का निर्माण करने के लिए हमसे जुड़ें।",
          primaryButton: "हमसे संपर्क करें",
          secondaryButton: "मूल्य देखें"
        }
      },
      contact: {
        title: "हमसे संपर्क करें",
        subtitle: "प्रश्न, साझेदारी, या प्रेस—हम आपकी बात सुनना चाहेंगे।",
        submit: "संदेश भेजें"
      },
      onboarding: {
        title: "अपनी CareAI यात्रा शुरू करें",
        subtitle: "हमें अपने बारे में बताएं, व्यक्तिगत सिफारिशें प्राप्त करें",
        steps: {
          role: "अपनी भूमिका चुनें",
          details: "हमें और बताएं",
          success: "CareAI में आपका स्वागत है!"
        },
        roles: {
          senior: {
            title: "मैं एक वरिष्ठ नागरिक हूं",
            subtitle: "साथी और समर्थन की तलाश में",
            icon: "👴"
          },
          family: {
            title: "मैं परिवार/देखभालकर्ता हूं",
            subtitle: "किसी प्रियजन की देखभाल कर रहा हूं",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "मैं एक स्वास्थ्य पेशेवर हूं",
            subtitle: "AI के साथ रोगी देखभाल में सुधार",
            icon: "👨‍⚕️"
          }
        },
        fields: {
          basic: {
            firstName: "पहला नाम",
            lastName: "अंतिम नाम",
            email: "ईमेल पता",
            phone: "फोन नंबर (वैकल्पिक)"
          },
          senior: {
            age: "उम्र",
            livingSituation: "रहने की स्थिति",
            primaryConcern: "मुख्य स्वास्थ्य चिंता"
          },
          family: {
            relationship: "वरिष्ठ नागरिक से संबंध",
            seniorAge: "वरिष्ठ नागरिक की उम्र",
            careLevel: "आवश्यक देखभाल स्तर",
            primaryConcern: "मुख्य स्वास्थ्य चिंता"
          },
          professional: {
            organization: "संगठन का नाम",
            role: "पेशेवर भूमिका",
            organizationType: "संगठन का प्रकार",
            useCase: "मुख्य उपयोग मामला"
          },
          consent: "मैं उपयोग की शर्तों और गोपनीयता नीति से सहमत हूं और सहमत हूं कि CareAI मेरी पूछताछ के बारे में मुझसे संपर्क करे।",
          submit: "अभी शुरू करें",
          submitting: "आपका खाता सेट किया जा रहा है..."
        },
        success: {
          title: "CareAI में आपका स्वागत है!",
          subtitle: "आपका खाता सेट किया जा रहा है। यहां आगे क्या होगा:",
          nextSteps: [
            "हम आपकी जानकारी की समीक्षा करते हैं और आपको सही योजना से मिलाते हैं",
            "आपको अगले कदमों के साथ एक स्वागत ईमेल मिलेगा",
            "हमारी टीम 24 घंटों के भीतर आपसे संपर्क करेगी और शुरू करेगी",
            "आपका AI साथी 2-3 कार्य दिवसों में तैयार होगा"
          ],
          cta: "होमपेज पर वापस जाएं"
        },
        cta: {
          title: "शुरू करने के लिए तैयार हैं?",
          subtitle: "पहले से ही CareAI का उपयोग कर रहे हजारों परिवारों और स्वास्थ्य सेवा प्रदाताओं में शामिल हों",
          button: "अपनी यात्रा शुरू करें"
        }
      },
      footer: {
        rights: "सर्वाधिकार सुरक्षित",
        links: [
          { href: "/hi/legal/terms", label: "शर्तें" },
          { href: "/hi/legal/privacy", label: "गोपनीयता" }
        ]
      }
    },
    pt: {
      metaTitle: "CareAI - Soluções de Saúde Baseadas em IA",
      metaDescription: "Companheiro de IA para idosos com lembretes de medicamentos, verificações de saúde e alertas SOS.",
      hero: {
        title: "Soluções de Saúde Baseadas em IA",
        subtitle: "Transforme o cuidado do paciente com automação inteligente, análise preditiva e integração perfeita com todos os sistemas de saúde.",
        ctaPrimary: "Começar Agora",
        ctaSecondary: "Saber Mais"
      },
      howItWorks: {
        title: "Como Funciona",
        subtitle: "Companheiro de IA simples e eficaz em três passos",
        steps: [
          {
            title: "Conversar",
            description: "O companheiro de IA inicia, escuta e lembra.",
            icon: "💬"
          },
          {
            title: "Lembrar",
            description: "Lembretes oportunos de medicamentos e hidratação.",
            icon: "⏰"
          },
          {
            title: "Proteger",
            description: "Alertas SOS notificam família e equipes de cuidado imediatamente.",
            icon: "🛡️"
          }
        ]
      },
      features: {
        title: "Recursos Principais",
        subtitle: "Soluções abrangentes de IA que transformam a saúde",
        items: [
          { title: "Diagnóstico por IA", description: "Suporte diagnóstico avançado com 95%+ de precisão", icon: "🔬" },
          { title: "Agendamento Inteligente", description: "Agendamento inteligente de consultas e otimização de recursos", icon: "📅" },
          { title: "Análise de Pacientes", description: "Insights abrangentes de pacientes e modelagem preditiva", icon: "📊" },
          { title: "Hub de Integração", description: "Conexão perfeita com sistemas de saúde existentes", icon: "🔗" }
        ]
      },
      pricing: {
        title: "Preços simples e transparentes",
        subtitle: "Escolha o plano que se adapta às suas necessidades e família",
        note: "Preços amigáveis ao consumidor para idosos e famílias"
      },
      partners: {
        doctors: {
          title: "Para Médicos e Clínicas",
          subtitle: "Reduza doses perdidas, aumente a visibilidade da aderência, resumos exportáveis—sem aumentar a carga de trabalho da clínica.",
          valueProps: [
            "Reduza taxas de doses perdidas em até 30-40%",
            "Check-ins automatizados e regras de escalonamento",
            "Exportação CSV; roteiro de integração EHR"
          ],
          workflow: [
            "Registro do paciente",
            "Check-ins diários de IA",
            "Monitoramento de aderência",
            "Dashboard do provedor"
          ]
        },
        hospitals: {
          title: "Para Hospitais e Sistemas de Saúde",
          subtitle: "Suporte pós-alta que reduz readmissões através de lembretes diários e visibilidade do cuidador.",
          valueProps: [
            "Tempo de readmissão mais curto através de lembretes de aderência + hidratação",
            "Planos de cuidado pós-alta com visibilidade familiar",
            "Integração com sistemas de gerenciamento de cuidado existentes"
          ],
          workflow: [
            "Planejamento de alta",
            "Onboarding familiar",
            "Verificações diárias de saúde",
            "Alertas da equipe de cuidado"
          ]
        },
        insurance: {
          title: "Para Seguradoras e Pagadores",
          subtitle: "Melhor aderência → menos reivindicações evitáveis. Coortes e relatórios prontos para piloto.",
          valueProps: [
            "Melhor aderência → menos reivindicações evitáveis",
            "Dashboards populacionais (prontos para piloto)",
            "Estratificação de risco e definição de metas de intervenção"
          ],
          workflow: [
            "Identificação de membros",
            "Avaliação de risco",
            "Entrega de intervenção",
            "Avaliação de resultados"
          ]
        },
        charities: {
          title: "Para Organizações de Caridade e Organizações de Idosos",
          subtitle: "Vagas patrocinadas, suporte multilíngue, onboarding de 5 minutos.",
          valueProps: [
            "Vagas patrocinadas para populações carentes de serviços",
            "Suporte multilíngue (PT/EN)",
            "Processo de onboarding leve",
            "Monitoramento de saúde comunitária"
          ],
          workflow: [
            "Registro da organização",
            "Registro de membros",
            "Configuração do companheiro de IA",
            "Suporte contínuo"
          ]
        }
      },
      about: {
        hero: {
          title: "Sobre o CareAI",
          subtitle: "Somos uma startup em estágio inicial desenvolvendo IA segura e útil para idosos e cuidadores."
        },
        mission: {
          title: "Nossa Missão",
          description: "Acreditamos que toda equipe de cuidado merece acesso a ferramentas simples e acessíveis que melhoram a segurança e qualidade de vida. O CareAI combina IA conversacional com fluxos de trabalho de cuidadores para reduzir fricção e aumentar aderência—sem fingir substituir julgamento clínico."
        },
        vision: {
          title: "Nossa Visão",
          description: "Imaginamos um futuro onde todo idoso tem um companheiro digital confiável que os ajuda a viver independentemente por mais tempo, onde famílias sentem paz sabendo que seus entes queridos estão sendo cuidados, e onde parceiros de saúde podem expandir seu alcance enquanto se concentram no lado humano do cuidado."
        },
        partners: {
          title: "Parceiros Estratégicos",
          description: "Estamos ativamente procurando parceiros piloto: clínicos, comunidades de vida sênior, pagadores e sistemas de saúde. Se você está interessado em co-desenvolver recursos ou avaliar resultados, gostaríamos de conversar.",
          list: [
            "Sistemas de saúde e hospitais",
            "Comunidades de vida sênior",
            "Provedores de seguros",
            "Parceiros de tecnologia"
          ]
        },
        advisory: {
          title: "Conselho Consultivo",
          description: "Nosso conselho consultivo reúne especialistas em cuidado de idosos, ética de IA e tecnologia de saúde para orientar nossa missão e garantir que desenvolvamos soluções que realmente sirvam idosos e suas famílias.",
          list: [
            "Dr. Sarah Johnson - Medicina Geriátrica",
            "Prof. Michael Chen - Ética de IA",
            "Lisa Rodriguez - Tecnologia de Saúde",
            "Dr. James Wilson - Inovação em Cuidado de Idosos"
          ]
        },
        values: {
          title: "Nossos Valores Fundamentais",
          description: "Esses princípios orientam tudo o que fazemos no CareAI, desde o desenvolvimento de produtos até o atendimento ao cliente.",
          list: [
            {
              title: "Empatia primeiro",
              description: "Projetamos com idosos e cuidadores em mente, entendendo seus desafios e necessidades únicos."
            },
            {
              title: "Segurança e confiança",
              description: "Cada recurso prioriza a segurança do usuário e constrói confiança através de tecnologia transparente e confiável."
            },
            {
              title: "Acessibilidade",
              description: "Nossas soluções são projetadas para serem fáceis de usar para idosos de todos os níveis de habilidade técnica."
            },
            {
              title: "Inovação",
              description: "Exploramos continuamente novas maneiras pelas quais a IA pode melhorar o cuidado de idosos e a qualidade de vida."
            },
            {
              title: "Parceria",
              description: "Acreditamos em trabalhar com provedores de saúde, famílias e idosos para criar melhores soluções."
            },
            {
              title: "Impacto",
              description: "Medimos o sucesso pelo impacto positivo na vida dos idosos e pela paz de espírito de suas famílias."
            }
          ]
        },
        cta: {
          title: "Pronto para transformar o cuidado de idosos?",
          description: "Junte-se a nós para construir um futuro onde o envelhecimento é abraçado com confiança, dignidade e companheirismo.",
          primaryButton: "Entre em Contato",
          secondaryButton: "Ver Preços"
        }
      },
      contact: {
        title: "Entre em Contato",
        subtitle: "Perguntas, parcerias ou imprensa—gostaríamos de ouvir de você.",
        submit: "Enviar Mensagem"
      },
      onboarding: {
        title: "Comece Sua Jornada CareAI",
        subtitle: "Conte-nos sobre você para receber recomendações personalizadas",
        steps: {
          role: "Escolha Seu Papel",
          details: "Conte-nos Mais",
          success: "Bem-vindo ao CareAI!"
        },
        roles: {
          senior: {
            title: "Sou um Idoso",
            subtitle: "Procurando companhia e apoio",
            icon: "👴"
          },
          family: {
            title: "Sou Família/Cuidador",
            subtitle: "Cuidando de um ente querido",
            icon: "👨‍👩‍👧‍👦"
          },
          professional: {
            title: "Sou um Profissional de Saúde",
            subtitle: "Melhorando o cuidado do paciente com IA",
            icon: "👨‍⚕️"
          }
        },
        fields: {
          basic: {
            firstName: "Nome",
            lastName: "Sobrenome",
            email: "Endereço de Email",
            phone: "Número de Telefone (Opcional)"
          },
          senior: {
            age: "Idade",
            livingSituation: "Situação de Moradia",
            primaryConcern: "Principal Preocupação de Saúde"
          },
          family: {
            relationship: "Relacionamento com o Idoso",
            seniorAge: "Idade do Idoso",
            careLevel: "Nível de Cuidado Necessário",
            primaryConcern: "Principal Preocupação de Saúde"
          },
          professional: {
            organization: "Nome da Organização",
            role: "Papel Profissional",
            organizationType: "Tipo de Organização",
            useCase: "Caso de Uso Principal"
          },
          consent: "Concordo com os Termos de Uso e Política de Privacidade e concordo que o CareAI entre em contato comigo sobre minha consulta.",
          submit: "Começar Agora",
          submitting: "Sua conta está sendo configurada..."
        },
        success: {
          title: "Bem-vindo ao CareAI!",
          subtitle: "Sua conta está sendo configurada. Aqui está o que acontece a seguir:",
          nextSteps: [
            "Revisamos suas informações e as combinamos com o plano certo",
            "Você receberá um email de boas-vindas com os próximos passos",
            "Nossa equipe entrará em contato em 24 horas para começar",
            "Seu companheiro de IA estará pronto em 2-3 dias úteis"
          ],
          cta: "Voltar à Página Inicial"
        },
        cta: {
          title: "Pronto para começar?",
          subtitle: "Junte-se a milhares de famílias e provedores de saúde que já usam o CareAI",
          button: "Comece Sua Jornada"
        }
      },
      footer: {
        rights: "Todos os direitos reservados",
        links: [
          { href: "/pt/legal/terms", label: "Termos" },
          { href: "/pt/legal/privacy", label: "Privacidade" }
        ]
      }
    }
  };
