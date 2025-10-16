"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/7563593/pexels-photo-7563593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Brown paper bag with 'Made With Love' label held by hands over a red background." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." },
  { "id": "product-1", "url": "https://images.pexels.com/photos/6461509/pexels-photo-6461509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Top view of various colored spools of thread on a white background." },
  { "id": "product-2", "url": "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Vintage travel essentials flat lay with leather bags, shoes, camera, and clothing." },
  { "id": "product-3", "url": "https://images.pexels.com/photos/34241720/pexels-photo-34241720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two modern smartphones, one white and one blue, displayed vertically on a wooden surface." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"icon-arrow"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"rounded"}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" },
            { name: "About", id: "about" },
          ]}
          brandName="MyBrand"
          buttonText="Shop Now"
          buttonVariant="icon-arrow"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to My E-Com"
            description="Discover exclusive deals and premium products!"
            buttons={[
              { text: "Shop Now", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              {
                id: "1",
                brand: "HomeStyle",
                name: "Decor Vase",
                price: "$45",
                rating: 4.5,
                reviewCount: "89",
                imageSrc: assetMap.find(a => a.id === "product-1")?.url,
              },
              {
                id: "2",
                brand: "FashMark",
                name: "Leather Wallet",
                price: "$29",
                rating: 4.7,
                reviewCount: "120",
                imageSrc: assetMap.find(a => a.id === "product-2")?.url,
              },
              {
                id: "3",
                brand: "TechPro",
                name: "Wireless Earbuds",
                price: "$79",
                rating: 4.8,
                reviewCount: "200",
                imageSrc: assetMap.find(a => a.id === "product-3")?.url,
              }
            ]}
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Connected"
            description="Subscribe for updates on our latest products and offers"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            logoText="MyBrand"
            columns={[
              { items: [{ label: "Home", href: "home" }, { label: "Products", href: "products" }] },
              { items: [{ label: "Contact", href: "contact" }, { label: "About", href: "about" }] }
            ]}
            className="bg-pink-100 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
