from bs4 import BeautifulSoup
import re

with open("dashboard-filled.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# 1. Update stats row grid
stats_div = soup.find("div", class_=re.compile(r"grid-cols-1 md:grid-cols-4"))
if stats_div:
    # Change grid-cols-1 to grid-cols-2, gap-6 to gap-4 md:gap-6, mb-12 to mb-8 md:mb-12
    new_class = stats_div.get("class", [])
    new_class = [c.replace("grid-cols-1", "grid-cols-2") for c in new_class]
    new_class = [c if c != "gap-6" else "gap-3 md:gap-6" for c in new_class]
    new_class = [c if c != "mb-12" else "mb-6 md:mb-12" for c in new_class]
    stats_div["class"] = " ".join(new_class).split()

# 2. Update stat cards
stat_cards = soup.find_all("div", class_=re.compile(r"p-\[20px\]"))
for card in stat_cards:
    cls = card.get("class", [])
    if "flex" in cls and "pb-[16px]" in cls:
        if "flex-col" not in cls:
            cls.insert(cls.index("flex")+1, "flex-col")
        if "md:flex-row" not in cls:
            cls.insert(cls.index("flex-col")+1, "md:flex-row")
        if "items-center" in cls:
            cls[cls.index("items-center")] = "md:items-center"
            
    # Add hidden md:flex to the icon div
    icon_div = card.find("div", class_=re.compile(r"w-12 h-12"))
    if icon_div:
        icon_cls = icon_div.get("class", [])
        if "hidden" not in icon_cls:
            icon_cls = ["hidden", "md:flex"] + [c for c in icon_cls if c != "flex"]
            icon_div["class"] = icon_cls
            
    # Maybe adjust text size mb
    text_div = card.find("span", class_=re.compile(r"text-\[13px\]"))
    if text_div:
        tcls = text_div.get("class", [])
        tcls = [c.replace("mb-[6px]", "mb-1") + (" md:mb-[6px]" if "mb-[6px]" in c else "") for c in tcls]
        tcls = [c.replace("text-[13px]", "text-[12px]") + (" md:text-[13px]" if "text-[13px]" in c else "") for c in tcls]
        text_div["class"] = " ".join(tcls).split()
        
    val_div = card.find("span", class_=re.compile(r"text-\[24px\]"))
    if val_div:
        vcls = val_div.get("class", [])
        vcls = [c.replace("text-[24px]", "text-[20px]") + (" md:text-[24px]" if "text-[24px]" in c else "") for c in vcls]
        val_div["class"] = " ".join(vcls).split()
        
    card["class"] = " ".join(cls).split()

# 3. Recent briefs section
recent_div = soup.find(lambda t: t.name == "h3" and "Recent Briefs" in t.text)
if recent_div:
    recent_header = recent_div.parent
    if recent_header:
        # p-6 -> p-4 md:p-6
        hcls = recent_header.get("class", [])
        hcls = [c.replace("p-6", "p-4") + (" md:p-6" if c == "p-6" else "") for c in hcls]
        recent_header["class"] = " ".join(hcls).split()
    recent_body = recent_header.find_next_sibling("div")
    if recent_body:
        bcls = recent_body.get("class", [])
        bcls = [c.replace("p-6", "p-4") + (" md:p-6" if c == "p-6" else "") for c in bcls]
        bcls = [c.replace("gap-5", "gap-3") + (" md:gap-5" if c == "gap-5" else "") for c in bcls]
        recent_body["class"] = " ".join(bcls).split()

# 4. Notifications -> Recent Activity
notif_div = soup.find(lambda t: t.name == "h3" and "Notifications" in t.text)
if notif_div:    
    notif_div.string = "Recent Activity"
    view_all = notif_div.find_next_sibling("a")
    if view_all and "View All" in view_all.text:
        view_all.string = "Mark all as read"
        
# 5. Hide old footer on mobile, add new mobile footer
footer = soup.find("footer")
if footer:
    fcls = footer.get("class", [])
    if "hidden" not in fcls:
        fcls.append("hidden")
        fcls.append("md:block")
        footer["class"] = " ".join(fcls).split()
        
    mobile_footer_str = """
    <!-- Mobile Accordion Footer -->
    <footer class="bg-gray-50 border-t border-gray-200 mt-0 pt-8 pb-4 md:hidden w-full shrink-0">
        <!-- Brand / Slogan -->
        <div class="px-4 py-8 bg-white text-center border-b border-gray-200 flex flex-col items-center">
            <img src="./src/images/donau-logo.png" alt="Donau AI" class="h-6 w-auto mb-3">
            <p class="text-[#64748b] text-[13px] leading-relaxed max-w-[280px]">
                AI-powered platform connecting brands with manufacturers
            </p>
        </div>
        
        <!-- Accordions -->
        <div class="bg-white">
            <div class="border-b border-gray-100">
                <button onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')" class="w-full py-4 px-4 flex justify-between items-center font-bold text-[#0e1726] text-[15px]">
                    Platform <i class="ph ph-caret-down text-lg transition-transform duration-200"></i>
                </button>
                <ul class="hidden px-4 pb-4 space-y-3 text-[#475569] text-[14px]">
                    <li><a href="home.html" class="block py-1">Home</a></li>
                    <li><a href="brands.html" class="block py-1">Brands</a></li>
                    <li><a href="manufacturers.html" class="block py-1">Manufacturers</a></li>
                </ul>
            </div>
            
            <div class="border-b border-gray-100">
                <button onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')" class="w-full py-4 px-4 flex justify-between items-center font-bold text-[#0e1726] text-[15px]">
                    Resources <i class="ph ph-caret-down text-lg transition-transform duration-200"></i>
                </button>
                <ul class="hidden px-4 pb-4 space-y-3 text-[#475569] text-[14px]">
                    <li><a href="api-documentation.html" class="block py-1">API Documentation</a></li>
                    <li><a href="help-center.html" class="block py-1">Help Center</a></li>
                </ul>
            </div>
            
            <div class="border-b border-gray-100">
                <button onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')" class="w-full py-4 px-4 flex justify-between items-center font-bold text-[#0e1726] text-[15px]">
                    Company <i class="ph ph-caret-down text-lg transition-transform duration-200"></i>
                </button>
                <ul class="hidden px-4 pb-4 space-y-3 text-[#475569] text-[14px]">
                    <li><a href="contact.html" class="block py-1">Contact</a></li>
                    <li><a href="privacy-policy.html" class="block py-1">Privacy Policy</a></li>
                    <li><a href="terms-of-service.html" class="block py-1">Terms of Service</a></li>
                </ul>
            </div>
            
            <div class="border-b border-gray-100">
                <button onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180')" class="w-full py-4 px-4 flex justify-between items-center font-bold text-[#0e1726] text-[15px]">
                    Support <i class="ph ph-caret-down text-lg transition-transform duration-200"></i>
                </button>
                <ul class="hidden px-4 pb-4 space-y-3 text-[#475569] text-[14px]">
                    <li><a href="mailto:info@donauai.com" class="block py-1">info@donauai.com</a></li>
                </ul>
            </div>
        </div>
        
        <!-- Bottom section -->
        <div class="bg-gray-50 flex flex-col items-center py-8 gap-6">
             <p class="text-[13px] text-[#64748b]">&copy; 2026 DonauApp</p>
            <div class="flex items-center gap-[16px]">
                <a href="#" class="w-[42px] h-[42px] rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0e1726]"><i class="fa-brands fa-facebook-f text-[19px]"></i></a>
                <a href="#" class="w-[42px] h-[42px] rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0e1726]"><i class="fa-brands fa-instagram text-[23px]"></i></a>
                <a href="#" class="w-[42px] h-[42px] rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0e1726]"><i class="fa-brands fa-linkedin-in text-[19px]"></i></a>
            </div>
            <div class="flex items-center justify-center w-full px-8 text-[13px] text-[#0e1726]">
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-[6px]">
                        <i class="ph ph-globe text-[16px]"></i>
                        <span>English</span>
                    </div>
                    <span>EUR</span>
                </div>
            </div>
        </div>
    </footer>
    """
    mobile_footer_soup = BeautifulSoup(mobile_footer_str, "html.parser")
    footer.insert_after(mobile_footer_soup)

# 6. Brief cards
brief_cards = soup.find_all("div", class_=re.compile(r"p-6 relative bg-\[#f4f6f9\]"))
for card in brief_cards:
    cls = card.get("class", [])
    cls = [c.replace("p-6", "p-4") + (" md:p-6" if c == "p-6" else "") for c in cls]
    card["class"] = " ".join(cls).split()
    
    # modify View Details absolute link
    a_vd = card.find("a", class_=re.compile(r"absolute top-6 right-6"))
    if a_vd:
        acls = a_vd.get("class", [])
        acls = [c.replace("top-6", "top-4").replace("right-6", "right-4") + (" md:top-6" if "top-6" in c else (" md:right-6" if "right-6" in c else "")) for c in acls]
        
        # Make the View Details text smaller on mobile
        acls = [c.replace("text-[14px]", "text-[13px]") + (" md:text-[14px]" if "text-[14px]" in c else "") for c in acls]
        
        a_vd["class"] = " ".join(acls).split()
        
    # Title container flex items-center
    title_row = card.find("div", class_=re.compile(r"flex items-center gap-3 mb-2"))
    if title_row:
        # Hide badge and info on mobile inside the title row
        badge = title_row.find("span", class_=re.compile(r"px-3 py-1 rounded-full"))
        b_str = ""
        if badge:
            bcls = badge.get("class", [])
            if "hidden" not in bcls:
                badge["class"] = " ".join(["hidden", "md:inline-flex"] + [c for c in bcls if c != "flex"]).split()
            b_str = str(badge).replace('hidden md:inline-flex ', '')
        
        info = title_row.find("i", class_=re.compile(r"ph-info"))
        i_str = ""
        if info:
            icls = info.get("class", [])
            if "hidden" not in icls:
                info["class"] = " ".join(["hidden", "md:inline-flex"] + icls).split()
            i_str = str(info).replace('hidden md:inline-flex ', '')
                
        # create mobile badge row above title row
        if b_str or i_str:
            mobile_badge_row = BeautifulSoup(f'''<div class="flex md:hidden items-center gap-2 mb-2 pt-1 border-0">{b_str}{i_str}</div>''', 'html.parser')
            title_row.insert_before(mobile_badge_row)
        
        # Make title slightly smaller on mobile
        h4 = title_row.find("h4")
        if h4:
            h4cls = h4.get("class", [])
            h4cls = [c.replace("text-[16px]", "text-[15px]") + (" md:text-[16px]" if "text-[16px]" in c else "") for c in h4cls]
            # Add padding-right so it doesn't overlap View Details entirely on tiny screens
            h4cls.append("pr-20")
            h4cls.append("md:pr-0")
            h4["class"] = " ".join(h4cls).split()
        
        # Next paragraph margin bottom
        p_co = title_row.find_next_sibling("p")
        if p_co:
            pcls = p_co.get("class", [])
            pcls = [c.replace("mb-5", "mb-3") + (" md:mb-5" if "mb-5" in c else "") for c in pcls]
            pcls = [c.replace("text-[14px]", "text-[13px]") + (" md:text-[14px]" if "text-[14px]" in c else "") for c in pcls]
            p_co["class"] = " ".join(pcls).split()
            
        # Also tags grid 
        tags_div = card.find("div", class_=re.compile("flex flex-wrap"))
        if tags_div:
            tags_div["class"] = " ".join([c.replace("gap-4", "gap-2") + (" md:gap-4" if "gap-4" in c else "") for c in tags_div.get("class", [])]).split()
            for tcard in tags_div.find_all("div", class_=re.compile("px-4 py-1.5")):
                tc = tcard.get("class", [])
                tc = [c.replace("px-4", "px-3") + (" md:px-4" if "px-4" in c else "") for c in tc]
                tcard["class"] = " ".join(tc).split()


# Use specific formatter to avoid ruining indentation
# We replace unicode non-breaking spaces if any, just dump to file
with open("dashboard-filled.html.new", "w", encoding="utf-8") as f:
    f.write(str(soup))
print("Done writing to dashboard-filled.html.new")
