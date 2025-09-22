// ✅ जरूरी imports
import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  User,
  Send,
  Mic,
  Paperclip,
  Eye,
  EyeOff,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  Phone,
  Receipt,
  UserPlus,
  HelpCircle,
} from "lucide-react";

// ✅ अपना logo import

// -------------------- Typing Indicator --------------------
const TypingIndicator = () => (
  <div className="flex items-start space-x-3 mb-3 animate-pulse">
    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-md">
      <MessageCircle className="w-5 h-5 text-white" />
    </div>
    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-sm border border-gray-100 max-w-xs">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  </div>
);

// -------------------- Balance Card --------------------
const BalanceCard = ({ data }) => {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-xl shadow-lg min-w-72 max-w-sm hover:shadow-2xl transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <CreditCard className="w-5 h-5" />
          <span className="font-semibold">Account Balance</span>
        </div>
        <button onClick={() => setShowBalance(!showBalance)}>
          {showBalance ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      <div>
        <div className="text-2xl font-bold">
          {showBalance
            ? `₹${data.balance.toLocaleString("en-IN")}`
            : "₹•••••••"}
        </div>
        <div className="text-red-200 text-sm">
          Account: ••••{data.accountNumber.slice(-4)}
        </div>
      </div>
    </div>
  );
};

// -------------------- Transaction List --------------------
const TransactionList = ({ transactions }) => (
  <div className="bg-white border border-gray-100 rounded-xl shadow-sm min-w-80 max-w-md hover:shadow-md transition-shadow">
    <div className="p-3 border-b border-gray-100 flex items-center space-x-2">
      <Clock className="w-4 h-4 text-red-600" />
      <span className="font-semibold text-gray-800">Recent Transactions</span>
    </div>
    <div className="divide-y divide-gray-50">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="p-3 hover:bg-gray-50 flex justify-between items-center transition-colors"
        >
          <div className="flex items-center space-x-2">
            <div
              className={`p-2 rounded-full ${
                tx.type === "credit"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {tx.type === "credit" ? (
                <ArrowDownLeft className="w-4 h-4" />
              ) : (
                <ArrowUpRight className="w-4 h-4" />
              )}
            </div>
            <div>
              <div className="font-medium text-gray-800 text-sm">
                {tx.description}
              </div>
              <div className="text-gray-500 text-xs">
                {tx.date.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
          <div
            className={`font-semibold text-sm ${
              tx.type === "credit" ? "text-green-600" : "text-red-600"
            }`}
          >
            {tx.type === "credit" ? "+" : "-"}₹
            {Math.abs(tx.amount).toLocaleString("en-IN")}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// -------------------- Chat Message --------------------
const ChatMessage = ({ message }) => {
  const isBot = message.sender === "bot";
  const renderContent = () => {
    if (message.type === "balance")
      return <BalanceCard data={message.data} />;
    if (message.type === "transaction")
      return <TransactionList transactions={message.data} />;
    return (
      <div
        className={`max-w-xs px-3 py-2 rounded-2xl ${
          isBot
            ? "bg-white text-gray-800 shadow-sm border"
            : "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
        } transition-colors`}
      >
        <p className="text-sm">{message.text}</p>
        <div
          className={`text-xs mt-1 ${
            isBot ? "text-gray-500" : "text-red-200"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    );
  };
  return (
    <div
      className={`flex items-start space-x-3 mb-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
      )}
      <div>{renderContent()}</div>
      {!isBot && (
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      )}
    </div>
  );
};

// -------------------- Chat Input --------------------
const ChatInput = ({ onSendMessage, disabled }) => {
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.trim() && !disabled) {
      onSendMessage(msg.trim());
      setMsg("");
    }
  };
  return (
    <div className="border-t border-gray-100 p-3 bg-white">
      <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
        <button type="button" className="text-gray-400">
          <Paperclip className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type message..."
          disabled={disabled}
          className="flex-1 px-3 py-2 bg-gray-50 rounded-full focus:outline-none"
        />
        <button type="button" className="text-gray-400">
          <Mic className="w-5 h-5" />
        </button>
        <button
          type="submit"
          disabled={!msg.trim() || disabled}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

// -------------------- Quick Actions --------------------
const QuickActions = ({ onActionSelect }) => {
  const actions = [
    { id: "1", title: "Check Balance", icon: CreditCard, action: "balance" },
    { id: "2", title: "Send Money", icon: Send, action: "transfer" },
    { id: "3", title: "Pay Bills", icon: Receipt, action: "bills" },
    { id: "4", title: "Recharge", icon: Phone, action: "recharge" },
    { id: "5", title: "Add Beneficiary", icon: UserPlus, action: "beneficiary" },
    { id: "6", title: "Help & Support", icon: HelpCircle, action: "help" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-red-50 rounded-t-xl">
      {actions.map((a) => {
        const Icon = a.icon;
        return (
          <button
            key={a.id}
            onClick={() => onActionSelect(a.action)}
            className="bg-white p-3 rounded-xl flex flex-col items-center hover:shadow-md transition-shadow"
          >
            <Icon className="w-5 h-5 text-red-600 mb-1" />
            <span className="text-sm text-gray-800">{a.title}</span>
          </button>
        );
      })}
    </div>
  );
};

// -------------------- Main App --------------------
export default function App() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "नमस्ते! Neo Bank Virtual Assistant में आपका स्वागत है।",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Dummy Bank Data
  const mockBankData = {
    balance: 100000,
    accountNumber: "1234567890",
    transactions: [
      {
        id: "1",
        description: "Salary Credit",
        type: "credit",
        amount: 85000,
        date: new Date(2024, 0, 15),
      },
      {
        id: "2",
        description: "Electricity Bill",
        type: "debit",
        amount: -1200,
        date: new Date(2024, 0, 13),
      },
    ],
  };

  // Send message
  const sendMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender: "user", timestamp: new Date() },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      const responses = [
        {
          type: "balance",
          text: "यह आपका account balance है",
          data: mockBankData,
        },
        {
          type: "transaction",
          text: "ये रही आपकी हाल की transactions 👇",
          data: mockBankData.transactions,
        },
        { type: "text", text: "क्या आप cheque book मंगवाना चाहते हैं?" },
        {
          type: "text",
          text: "Recharge, Bill Payment और Fund Transfer भी आप यहीं कर सकते हैं ✅",
        },
        {
          type: "text",
          text: "Help & Support section में FAQ और contact details available हैं।",
        },
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          timestamp: new Date(),
          ...randomResponse,
        },
      ]);
    }, 1200);
  };

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden">
        
        {/* -------------------- Header with Logo -------------------- */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 flex items-center justify-center space-x-3">
          <img
            src={"src/assets/neobank-logo.png"}
            alt="Neo Bank Logo"
            className="w-10 h-10 rounded shadow-md"
          />
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-wide">Neo Bank Virtual Assistant</h1>
            <p className="text-xs text-red-200"></p>
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions onActionSelect={sendMessage} />

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-3 bg-gradient-to-b from-red-50 to-white">
          {messages.map((m) => (
            <ChatMessage key={m.id} message={m} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}
