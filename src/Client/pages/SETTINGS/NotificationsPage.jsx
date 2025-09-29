import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Notifications.css"; // Custom CSS for additional styling

const DEFAULT_SETTINGS = {
  globalEnabled: true,
  channels: { email: true, sms: true, push: true },
  categories: {
    transaction: { email: true, sms: true, push: true },
    security: { email: true, sms: true, push: true },
    offers: { email: false, sms: false, push: false },
    product: { email: true, sms: false, push: true },
  },
  frequency: "immediate",
};

export default function NotificationsPage() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [savedMsg, setSavedMsg] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("nb_notify_settings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch {
        setSettings(DEFAULT_SETTINGS);
      }
    }
  }, []);

  useEffect(() => {
    if (savedMsg) {
      const t = setTimeout(() => setSavedMsg(""), 3000);
      return () => clearTimeout(t);
    }
  }, [savedMsg]);

  const toggleGlobal = () => setSettings((s) => ({ ...s, globalEnabled: !s.globalEnabled }));
  const toggleChannel = (channel) =>
    setSettings((s) => ({ ...s, channels: { ...s.channels, [channel]: !s.channels[channel] } }));
  const toggleCategoryChannel = (category, channel) =>
    setSettings((s) => ({
      ...s,
      categories: {
        ...s.categories,
        [category]: { ...s.categories[category], [channel]: !s.categories[category][channel] },
      },
    }));
  const setFrequency = (freq) => setSettings((s) => ({ ...s, frequency: freq }));
  const saveSettings = () => {
    localStorage.setItem("nb_notify_settings", JSON.stringify(settings));
    setSavedMsg("Settings saved successfully");
  };
  const resetDefaults = () => {
    setSettings(DEFAULT_SETTINGS);
    setSavedMsg("Restored defaults");
  };

  const ChannelBadge = ({ ch }) => {
    const colors = { email: "#900603", sms: "#900603", push: "#900603" };
    const emojis = { email: "✉️", sms: "📱", push: "🔔" };
    return (
      <span
        className="badge me-1"
        style={{
          backgroundColor: colors[ch],
          color: "#fff",
          padding: "0.4em 0.8em",
          fontSize: "0.8rem",
        }}
      >
        {emojis[ch]} {ch.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div
        className="header-card p-4 rounded-4 shadow-sm d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#900603", color: "#fff" }}
      >
        <div>
          <h3 className="mb-1">Notification Preferences</h3>
          <p className="mb-0">
            Control how you receive alerts for transactions, security, offers, and product updates
          </p>
        </div>
        <div className="text-end">
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="globalToggle"
              checked={settings.globalEnabled}
              onChange={toggleGlobal}
            />
            <label className="form-check-label small text-white" htmlFor="globalToggle">
              All notifications {settings.globalEnabled ? "ON" : "OFF"}
            </label>
          </div>
          <small className="text-white-50">Turn off global to pause all alerts</small>
        </div>
      </div>

      <div className="row gx-4 gy-4 mt-4">
        {/* Channels Card */}
        <div className="col-lg-4 col-md-6">
          <div
            className="card rounded-4 shadow-sm h-100 border-0"
            style={{ borderLeft: "5px solid #900603", backgroundColor: "#fff0f0" }}
          >
            <div className="card-body">
              <h5 className="card-title text-dark">Channels</h5>
              <p className="text-muted small">Enable or disable channels across all notifications</p>

              {["email", "sms", "push"].map((ch) => (
                <div
                  key={ch}
                  className="d-flex justify-content-between align-items-center mb-3 p-2 rounded"
                  style={{ backgroundColor: "#900603", color: "#fff" }}
                >
                  <div>
                    <strong>{ch.toUpperCase()}</strong>
                    <div className="small">{ch === "email" ? "Receive Emails" : ch === "sms" ? "Receive SMS" : "Receive App Push"}</div>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={settings.channels[ch]}
                      onChange={() => toggleChannel(ch)}
                      disabled={!settings.globalEnabled}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Card */}
        <div className="col-lg-8 col-md-6">
          <div
            className="card rounded-4 shadow-sm h-100 border-0"
            style={{ borderLeft: "5px solid #900603", backgroundColor: "#fff0f0" }}
          >
            <div className="card-body">
              <h5 className="card-title text-dark">Notification Categories</h5>
              <p className="text-muted small">Manage per-category preferences</p>

              {[
                { key: "transaction", title: "Transaction Alerts", desc: "Debit/Credit, UPI, NEFT, IMPS, RTGS" },
                { key: "security", title: "Security Alerts", desc: "Login attempts, password changes, suspicious activity" },
                { key: "offers", title: "Offers & Promotions", desc: "New offers, partner deals, promotional messages" },
                { key: "product", title: "Product Updates", desc: "New features & announcements" },
              ].map((cat) => (
                <div
                  key={cat.key}
                  className="d-flex align-items-start category-row p-3 rounded-3 mb-2"
                  style={{ backgroundColor: "#fff5f5" }}
                >
                  <div className="me-3">
                    <div
                      className="cat-icon rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#900603", color: "#fff", width: 40, height: 40 }}
                    >
                      {cat.key === "transaction"
                        ? "💳"
                        : cat.key === "security"
                        ? "🔒"
                        : cat.key === "offers"
                        ? "🎁"
                        : "🧭"}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h6 className="mb-1">{cat.title}</h6>
                        <div className="small text-muted">{cat.desc}</div>
                      </div>

                      <div className="d-flex gap-2 align-items-center">
                        {["email", "sms", "push"].map((ch) => (
                          <div key={ch} className="form-check form-switch d-flex align-items-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={settings.categories[cat.key][ch]}
                              onChange={() => toggleCategoryChannel(cat.key, ch)}
                              disabled={!settings.globalEnabled || !settings.channels[ch]}
                              id={`${cat.key}-${ch}`}
                            />
                            <label className="form-check-label small ms-2" htmlFor={`${cat.key}-${ch}`}>
                              {ch.charAt(0).toUpperCase() + ch.slice(1)}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <hr />

              <div className="d-flex align-items-center justify-content-between">
                <div className="me-3">
                  <h6 className="mb-1">Digest Frequency</h6>
                  <small className="text-muted">How often you receive non-critical messages</small>
                </div>
                <div>
                  {["immediate", "daily", "weekly"].map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      className={`btn btn-sm me-1 ${settings.frequency === freq ? "btn-dark" : "btn-outline-dark"}`}
                      onClick={() => setFrequency(freq)}
                      disabled={!settings.globalEnabled}
                    >
                      {freq.charAt(0).toUpperCase() + freq.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview & Actions */}
        <div className="col-12">
          <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
            <div className="card rounded-4 shadow-sm flex-grow-1 border-0" style={{ borderLeft: "5px solid #900603" }}>
              <div className="card-body">
                <h6>Preview</h6>
                <p className="small text-muted">How your current preferences will be applied</p>
                <div className="d-flex flex-wrap gap-2">
                  <ChannelBadge ch="email" />
                  <ChannelBadge ch="sms" />
                  <ChannelBadge ch="push" />
                </div>
                <div className="mt-3 small">
                  <div><strong>Global:</strong> {settings.globalEnabled ? "Enabled" : "Disabled"}</div>
                  <div>
                    <strong>Channels active:</strong>{" "}
                    {Object.entries(settings.channels)
                      .filter(([k, v]) => v)
                      .map(([k]) => k.toUpperCase())
                      .join(", ") || "None"}
                  </div>
                  <div><strong>Frequency:</strong> {settings.frequency}</div>
                </div>
              </div>
            </div>

            <div className="card actions-card rounded-4 shadow-sm" style={{ minWidth: 220, borderLeft: "5px solid #900603" }}>
              <div className="card-body d-flex flex-column gap-2">
                <button className="btn btn-dark w-100" onClick={saveSettings}>
                  Save Changes
                </button>
                <button className="btn btn-outline-dark w-100" onClick={resetDefaults}>
                  Restore Defaults
                </button>
                {savedMsg && <div className="alert alert-success mt-2 mb-0 small">{savedMsg}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
