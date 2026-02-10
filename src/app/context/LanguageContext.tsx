import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية', fr: 'Accueil' },
  'nav.shop': { en: 'Shop', ar: 'المتجر', fr: 'Boutique' },
  'nav.newArrivals': { en: 'New Arrivals', ar: 'الجديد', fr: 'Nouveautés' },
  'nav.sizeGuide': { en: 'Size Guide', ar: 'دليل المقاسات', fr: 'Guide des Tailles' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا', fr: 'Contact' },
  
  // Hero Section
  'hero.slogan': { en: 'Wear the Green & Red. Support MCA.', ar: 'ارتدِ الأخضر والأحمر. ادعم مولودية', fr: 'Portez le Vert & Rouge. Soutenez le MCA.' },
  'hero.newCollection': { en: 'New Collection 2024/25', ar: 'مجموعة جديدة 2024/25', fr: 'Nouvelle Collection 2024/25' },
  'hero.title': { en: 'New MCA Jersey 24/25', ar: 'قميص مولودية الجديد 24/25', fr: 'Nouveau Maillot MCA 24/25' },
  'hero.description': { en: 'Support your team with the latest official MCA jersey. Premium quality, authentic design, and ultimate comfort.', ar: 'ادعم فريقك بأحدث قميص رسمي من مولودية. جودة عالية، تصميم أصيل، وراحة قصوى.', fr: 'Soutenez votre équipe avec le dernier maillot officiel du MCA. Qualité premium, design authentique et confort ultime.' },
  
  // Buttons
  'btn.shopNow': { en: 'Shop Now', ar: 'تسوق الآن', fr: 'Acheter' },
  'btn.viewCollection': { en: 'View Collection', ar: 'عرض المجموعة', fr: 'Voir la Collection' },
  'btn.addToCart': { en: 'Add to Cart', ar: 'أضف إلى السلة', fr: 'Ajouter au Panier' },
  'btn.buyNow': { en: 'Buy Now', ar: 'اشترِ الآن', fr: 'Acheter Maintenant' },
  'btn.checkout': { en: 'Checkout', ar: 'الدفع', fr: 'Commander' },
  'btn.confirmOrder': { en: 'Confirm Order', ar: 'تأكيد الطلب', fr: 'Confirmer la Commande' },
  'btn.continueShopping': { en: 'Continue Shopping', ar: 'متابعة التسوق', fr: 'Continuer les Achats' },
  'btn.viewAll': { en: 'View All', ar: 'عرض الكل', fr: 'Voir Tout' },
  'btn.placeOrder': { en: 'Place Order', ar: 'تقديم الطلب', fr: 'Passer Commande' },
  'btn.subscribe': { en: 'Subscribe', ar: 'اشترك', fr: "S'abonner" },
  
  // Product
  'product.inStock': { en: 'In Stock', ar: 'متوفر', fr: 'En Stock' },
  'product.outOfStock': { en: 'Out of Stock', ar: 'غير متوفر', fr: 'Rupture de Stock' },
  'product.new': { en: 'NEW', ar: 'جديد', fr: 'NOUVEAU' },
  'product.sale': { en: 'SALE', ar: 'تخفيض', fr: 'PROMO' },
  'product.selectSize': { en: 'Select Size', ar: 'اختر المقاس', fr: 'Sélectionner la Taille' },
  
  // Forms
  'form.fullName': { en: 'Full Name', ar: 'الاسم الكامل', fr: 'Nom Complet' },
  'form.phone': { en: 'Phone', ar: 'الهاتف', fr: 'Téléphone' },
  'form.email': { en: 'Email', ar: 'البريد الإلكتروني', fr: 'Email' },
  'form.address': { en: 'Address', ar: 'العنوان', fr: 'Adresse' },
  'form.city': { en: 'City', ar: 'المدينة', fr: 'Ville' },
  'form.postalCode': { en: 'Postal Code', ar: 'الرمز البريدي', fr: 'Code Postal' },
  
  // Pages
  'page.bestSellers': { en: 'Best Sellers', ar: 'الأكثر مبيعاً', fr: 'Meilleures Ventes' },
  'page.bestSellersDesc': { en: 'Our most popular products loved by fans', ar: 'المنتجات الأكثر شعبية المحبوبة من قبل المشجعين', fr: 'Nos produits les plus populaires appréciés des fans' },
  'page.cart': { en: 'Shopping Cart', ar: 'سلة التسوق', fr: 'Panier' },
  'page.checkout': { en: 'Checkout', ar: 'الدفع', fr: 'Paiement' },
  'page.orderConfirmation': { en: 'Order Confirmation', ar: 'تأكيد الطلب', fr: 'Confirmation de Commande' },
  
  // Trust Bar
  'trust.fastDelivery': { en: 'Fast Delivery', ar: 'توصيل سريع', fr: 'Livraison Rapide' },
  'trust.fastDeliveryDesc': { en: 'Free shipping on orders over 5000 DZD across Algeria', ar: 'شحن مجاني للطلبات فوق 5000 دج في جميع أنحاء الجزائر', fr: 'Livraison gratuite pour les commandes de plus de 5000 DZD en Algérie' },
  'trust.easyReturns': { en: 'Easy Returns', ar: 'إرجاع سهل', fr: 'Retours Faciles' },
  'trust.easyReturnsDesc': { en: '30-day return policy on all unworn items with tags', ar: 'سياسة إرجاع 30 يوماً لجميع المنتجات غير المستخدمة', fr: 'Politique de retour de 30 jours sur tous les articles non portés avec étiquettes' },
  'trust.securePayment': { en: 'Secure Payment', ar: 'دفع آمن', fr: 'Paiement Sécurisé' },
  'trust.securePaymentDesc': { en: 'Multiple payment options including cash on delivery', ar: 'خيارات دفع متعددة بما في ذلك الدفع عند الاستلام', fr: 'Options de paiement multiples incluant paiement à la livraison' },
  
  // Newsletter
  'newsletter.title': { en: 'Stay Updated', ar: 'ابقَ على اطلاع', fr: 'Restez Informé' },
  'newsletter.description': { en: 'Subscribe to our newsletter for exclusive offers, new arrivals, and MCA news', ar: 'اشترك في نشرتنا الإخبارية للحصول على عروض حصرية وآخر الأخبار', fr: 'Abonnez-vous à notre newsletter pour des offres exclusives, nouveautés et actualités du MCA' },
  'newsletter.placeholder': { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني', fr: 'Entrez votre email' },
  
  // Cart
  'cart.title': { en: 'Shopping Cart', ar: 'سلة التسوق', fr: 'Panier' },
  'cart.empty': { en: 'Your cart is empty', ar: 'سلة التسوق فارغة', fr: 'Votre panier est vide' },
  'cart.subtotal': { en: 'Subtotal', ar: 'المجموع الفرعي', fr: 'Sous-total' },
  'cart.shipping': { en: 'Shipping', ar: 'الشحن', fr: 'Livraison' },
  'cart.total': { en: 'Total', ar: 'الإجمالي', fr: 'Total' },
  'cart.remove': { en: 'Remove', ar: 'إزالة', fr: 'Supprimer' },
  'cart.updateQty': { en: 'Update Quantity', ar: 'تحديث الكمية', fr: 'Mettre à Jour la Quantité' },
  
  // Shop
  'shop.title': { en: 'Shop', ar: 'المتجر', fr: 'Boutique' },
  'shop.description': { en: 'Browse our complete collection of official MCA merchandise', ar: 'تصفح مجموعتنا الكاملة من منتجات مولودية الرسمية', fr: 'Parcourez notre collection complète d\'articles officiels du MCA' },
  'shop.filters': { en: 'Filters', ar: 'التصفية', fr: 'Filtres' },
  'shop.sort': { en: 'Sort', ar: 'ترتيب', fr: 'Trier' },
  'shop.showing': { en: 'Showing', ar: 'عرض', fr: 'Affichage' },
  'shop.products': { en: 'products', ar: 'منتجات', fr: 'produits' },
  'shop.allCategories': { en: 'All Categories', ar: 'جميع الفئات', fr: 'Toutes les Catégories' },
  'shop.allSeasons': { en: 'All Seasons', ar: 'جميع المواسم', fr: 'Toutes les Saisons' },
  'shop.allPrices': { en: 'All Prices', ar: 'جميع الأسعار', fr: 'Tous les Prix' },
  
  // Size Guide
  'sizeGuide.title': { en: 'Size Guide', ar: 'دليل المقاسات', fr: 'Guide des Tailles' },
  'sizeGuide.chartTitle': { en: 'Jersey Size Chart', ar: 'جدول مقاسات القميص', fr: 'Tableau des Tailles de Maillot' },
  'sizeGuide.howToMeasure': { en: 'How to Measure', ar: 'كيفية القياس', fr: 'Comment Mesurer' },
  
  // Checkout
  'checkout.title': { en: 'Checkout', ar: 'الدفع', fr: 'Commander' },
  'checkout.shippingInfo': { en: 'Shipping Information', ar: 'معلومات الشحن', fr: 'Informations de Livraison' },
  'checkout.paymentMethod': { en: 'Payment Method', ar: 'طريقة الدفع', fr: 'Mode de Paiement' },
  'checkout.orderSummary': { en: 'Order Summary', ar: 'ملخص الطلب', fr: 'Récapitulatif de Commande' },
  'checkout.cardPayment': { en: 'Card Payment', ar: 'الدفع بالبطاقة', fr: 'Paiement par Carte' },
  'checkout.cashOnDelivery': { en: 'Cash on Delivery', ar: 'الدفع عند الاستلام', fr: 'Paiement à la Livraison' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const isRTL = language === 'ar';

  useEffect(() => {
    // Update HTML attributes for RTL support
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mcastore-language', lang);
  };

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('mcastore-language') as Language;
    if (savedLang && ['en', 'ar', 'fr'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language] || translation.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
