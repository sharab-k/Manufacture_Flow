import React from "react";
import "../styles/strict-chat-layout.css";

export default function StrictChatLayout() {
  return (
    <div className="app-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Messages</div>
        <input className="sidebar-search" placeholder="Search messages..." />
        <div className="sidebar-tabs">
          <button className="sidebar-tab active">All</button>
          <button className="sidebar-tab">Unread</button>
        </div>
        <div className="sidebar-list">
          {[1, 2, 3].map((i) => (
            <div className="sidebar-list-item" key={i}>
              <img className="sidebar-avatar" src="https://i.pravatar.cc/48?img=" alt="avatar" />
              <div className="sidebar-list-text">
                <div className="sidebar-company">Acme Corp {i}</div>
                <div className="sidebar-snippet">This is a message snippet for company {i}.</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Window */}
      <section className="main-chat">
        <div className="main-chat-header">
          <div className="main-chat-header-left">
            <img className="main-chat-avatar" src="https://i.pravatar.cc/48?img=2" alt="avatar" />
            <div className="main-chat-title-block">
              <div className="main-chat-title">Acme Corp</div>
              <div className="main-chat-subtitle">Online now</div>
            </div>
          </div>
          <button className="main-chat-view-brief">View Brief</button>
        </div>
        <div className="main-chat-area">
          {/* Chat messages would go here */}
        </div>
        <div className="main-chat-input-area">
          <span className="attachment-icon" title="Attach file">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15V7a4 4 0 0 0-8 0v10a4 4 0 0 1-8 0V7"/></svg>
          </span>
          <input className="main-chat-input" placeholder="Type your message..." />
          <span className="send-icon" title="Send">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </span>
        </div>
      </section>
    </div>
  );
}
