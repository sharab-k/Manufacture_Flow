document.addEventListener("DOMContentLoaded", () => {
  // Feature: Password Visibility Toggle
  const togglePasswordButtons = document.querySelectorAll(
    "button i.ph-eye-slash, button i.ph-eye",
  );

  togglePasswordButtons.forEach((icon) => {
    const button = icon.parentElement;
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      if (input && input.type === "password") {
        input.type = "text";
        icon.classList.remove("ph-eye-slash");
        icon.classList.add("ph-eye");
      } else if (input && input.type === "text") {
        input.type = "password";
        icon.classList.remove("ph-eye");
        icon.classList.add("ph-eye-slash");
      }
    });
  });

  // Feature: Tab Switching (if not handled by simple links, but design shows links for some, let's support data-tabs if needed later,
  // but current pages use hrefs to specific html files for main tabs.
  // However, if there are in-page tabs (like potentially in Settings sub-sections if they weren't separate pages,
  // but they ARE separate pages based on current implementation).
  // Let's look at Brief Detail - it has links to separate HTML files.
  // So main tab switching is page navigation.

  // Feature: Dropdowns (e.g. Language Selector, User Profile)
  // Simple toggle implementation for any element with data-dropdown-trigger
  const dropdownTriggers = document.querySelectorAll("[data-dropdown-trigger]");

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = trigger.dataset.dropdownTarget;
      const target = document.getElementById(targetId);

      // Close all other dropdowns
      document.querySelectorAll("[data-dropdown-content]").forEach((d) => {
        if (d.id !== targetId) d.classList.add("hidden");
      });

      if (target) {
        target.classList.toggle("hidden");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("[data-dropdown-content]") &&
      !e.target.closest("[data-dropdown-trigger]")
    ) {
      document.querySelectorAll("[data-dropdown-content]").forEach((d) => {
        d.classList.add("hidden");
      });
    }
  });

  // Feature: Interactive Messages & Chat Simulation
  const chatInput = document.querySelector(
    'input[placeholder="Type your response..."]',
  );
  const sendButton = chatInput ? chatInput.nextElementSibling : null;
  const chatContainer =
    document.querySelector("#chat-messages-container") ||
    document.querySelector(".overflow-y-auto.space-y-6");

  // Data for simulated chats
  const chatData = {
    chat_1: {
      id: "chat_1",
      name: "Evergreen Apparel Co.",
      initials: "EA",
      role: "Brand",
      messages: [
        {
          type: "received",
          text: "Hi! I'm here to help you create a detailed product brief. Let's start with the basics. What type of product are you looking to manufacture?",
          time: "20:32",
        },
      ],
    },
    chat_2: {
      id: "chat_2",
      name: "Nova Apparel Industries",
      initials: "NA",
      role: "Brand",
      messages: [
        {
          type: "received",
          text: "Yes, customization is available with a 20-day lead time for this specific fabric blend. Does that work for your timeline?",
          time: "09:15",
        },
        {
          type: "sent",
          text: "Can we expedite that to 15 days if we increase the order volume?",
          time: "09:20",
        },
      ],
    },
    chat_3: {
      id: "chat_3",
      name: "BlueWeave Garments",
      initials: "BG",
      role: "Brand",
      messages: [
        {
          type: "received",
          text: "We've reviewed your brief and sent a quote matching your requirements. Please check it and let us know if you have questions.",
          time: "Yesterday",
        },
      ],
    },
  };

  let activeChatId = "chat_1";

  // Function to render messages for a specific chat
  function renderMessages(chatId) {
    if (!chatContainer) return;

    chatContainer.innerHTML = ""; // Clear current messages
    const chat = chatData[chatId];

    if (chat && chat.messages) {
      chat.messages.forEach((msg) => {
        let msgHTML = "";
        if (msg.type === "received") {
          msgHTML = `
                    <div class="flex gap-4 max-w-[80%]">
                        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">${chat.initials}</div>
                        <div>
                             <div class="bg-gray-100 rounded-2xl p-4 rounded-tl-sm text-sm text-slate-700 leading-relaxed shadow-sm">
                                <p>${msg.text}</p>
                             </div>
                             <span class="text-[10px] text-slate-400 mt-1 block">${msg.time}</span>
                        </div>
                    </div>`;
        } else {
          msgHTML = `
                    <div class="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                        <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">MT</div>
                        <div class="flex flex-col items-end">
                                <div class="flex items-baseline gap-2 mb-1">
                                    <span class="text-[10px] text-slate-400">${msg.time}</span>
                                    <span class="text-xs font-bold text-slate-900">You</span>
                                </div>
                                <div class="bg-blue-600 rounded-2xl rounded-tr-none p-4 text-sm text-white leading-relaxed shadow-sm">
                                <p>${msg.text}</p>
                                </div>
                        </div>
                    </div>`;
        }
        chatContainer.insertAdjacentHTML("beforeend", msgHTML);
      });
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  // Function to switch active chat
  function switchChat(chatId) {
    if (!chatData[chatId]) return;
    activeChatId = chatId;

    // Update Sidebar UI
    document.querySelectorAll("[data-chat-id]").forEach((el) => {
      if (el.dataset.chatId === chatId) {
        el.className =
          "p-4 bg-blue-50/50 border-l-4 border-blue-600 cursor-pointer";
        el.querySelector(".font-bold").classList.remove("text-slate-700"); // Ensure specific styling if needed
      } else {
        el.className =
          "p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent";
      }
    });

    // Update Header
    const headerAvatar = document.querySelector("#chat-header-avatar");
    const headerName = document.querySelector("#chat-header-name");
    const headerSubtitle = document.querySelector("#chat-header-subtitle");

    if (headerAvatar && headerName && headerSubtitle) {
      headerAvatar.textContent = chatData[chatId].initials;
      headerName.textContent = chatData[chatId].name;
      headerSubtitle.textContent = chatData[chatId].role;
    }

    // Render Messages
    renderMessages(chatId);
  }

  // Initialize Chat Switching logic
  const chatItems = document.querySelectorAll("[data-chat-id]");
  chatItems.forEach((item) => {
    item.addEventListener("click", () => {
      const chatId = item.dataset.chatId;
      switchChat(chatId);
    });
  });

  if (chatInput && sendButton && chatContainer) {
    // Handle Sending Messages
    const handleSendMessage = () => {
      const messageText = chatInput.value.trim();
      if (messageText) {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Add to data model
        if (chatData[activeChatId]) {
          chatData[activeChatId].messages.push({
            type: "sent",
            text: messageText,
            time: "Just now",
          });
        }

        // Render immediately (or just append to avoid full re-render, but full re-render is safer for syncing)
        // For performance, usually append, but for simplicity here, re-render is fine for small lists.
        // Let's append to look smoother.
        const userMsgHTML = `
                <div class="flex gap-4 max-w-[80%] ml-auto flex-row-reverse animate-fade-in">
                    <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">MT</div>
                    <div class="flex flex-col items-end">
                            <div class="flex items-baseline gap-2 mb-1">
                                <span class="text-[10px] text-slate-400">Just now</span>
                                <span class="text-xs font-bold text-slate-900">You</span>
                            </div>
                            <div class="bg-blue-600 rounded-2xl rounded-tr-none p-4 text-sm text-white leading-relaxed shadow-sm">
                            <p>${messageText}</p>
                            </div>
                    </div>
                </div>`;
        chatContainer.insertAdjacentHTML("beforeend", userMsgHTML);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        chatInput.value = "";

        // Simulate AI Response specific to the chat
        setTimeout(() => {
          const aiResponseText =
            "Thanks for your message. We'll get back to you shortly.";
          // Add to data model
          if (chatData[activeChatId]) {
            chatData[activeChatId].messages.push({
              type: "received",
              text: aiResponseText,
              time: currentTime,
            });
          }

          const aiInitials = chatData[activeChatId].initials;

          const aiMsgHTML = `
                    <div class="flex gap-4 max-w-[80%] animate-fade-in">
                        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">${aiInitials}</div>
                        <div>
                             <div class="bg-gray-100 rounded-2xl p-4 rounded-tl-sm text-sm text-slate-700 leading-relaxed shadow-sm">
                                <p>${aiResponseText}</p>
                             </div>
                             <span class="text-[10px] text-slate-400 mt-1 block">${currentTime}</span>
                        </div>
                    </div>`;
          chatContainer.insertAdjacentHTML("beforeend", aiMsgHTML);
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);
      }
    };

    sendButton.addEventListener("click", handleSendMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSendMessage();
      }
    });
  }

  // Feature: Auto-Active Navigation Link
  // Note: Since HTML pages have hardcoded active states, this dynamic check validates them or sets them if missing.
  const currentPath =
    window.location.pathname.split("/").pop() || "dashboard-filled.html";
  const navLinks = document.querySelectorAll("aside a, nav a"); // Extended to aside for sidebar

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href === currentPath ||
      (currentPath === "" && href === "dashboard-filled.html")
    ) {
      link.classList.add("bg-blue-50", "text-blue-600");
      link.classList.remove("text-slate-500");
    }
  });

  // Feature: Page Load Animation
  // Apply animation class to main content for a smooth entry
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.classList.add("animate-slide-up");
  }
});
