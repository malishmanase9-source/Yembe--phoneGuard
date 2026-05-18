import { useState, useEffect } from "react";

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const MOCK_REGISTERED = [
  { id: 1, name: "James Mwangi", phone: "+254 712 345 678", device: "Samsung Galaxy A54", imei: "35****44", plan: "Premium", status: "protected", stolen: false, location: "Nairobi, Kenya", joined: "Jan 2024" },
  { id: 2, name: "Amina Osei", phone: "+233 244 567 890", device: "iPhone 13", imei: "35****91", plan: "Basic", status: "protected", stolen: false, location: "Accra, Ghana", joined: "Feb 2024" },
  { id: 3, name: "Tariq Ndolo", phone: "+255 765 432 100", device: "Tecno Camon 20", imei: "86****23", plan: "Premium", status: "STOLEN", stolen: true, location: "Last: Dar es Salaam", joined: "Mar 2024" },
  { id: 4, name: "Grace Mutua", phone: "+254 798 123 456", device: "Xiaomi Redmi 12", imei: "86****77", plan: "Basic", status: "protected", stolen: false, location: "Mombasa, Kenya", joined: "Apr 2024" },
];

const PLANS = [
  { name: "Basic", price: "KSh 299/mo", features: ["GPS Tracking", "Remote Lock", "Email Alerts"], color: "#4488ff" },
  { name: "Premium", price: "KSh 599/mo", features: ["GPS Tracking", "Remote Lock", "Thief Photo", "SMS Alerts", "24/7 Support", "Police Report Help"], color: "#ffc832" },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function LandingPage({ onRegister, onAdminLogin }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f7f4ef", fontFamily: "'Georgia', serif", color: "#1a1a2e" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(247,244,239,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center",
        transition: "all 0.3s"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px" }}>🛡️</span>
          <div>
            <span style={{ color: "#1a1a2e", fontSize: "20px", fontWeight: "bold", letterSpacing: "2px" }}>YEMBE</span>
            <span style={{ color: "#cc4400", fontSize: "13px", marginLeft: "8px", letterSpacing: "1px" }}>PhoneGuard</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button onClick={onAdminLogin} style={{
            padding: "8px 18px", background: "transparent", border: "1px solid #aaa",
            borderRadius: "6px", cursor: "pointer", fontSize: "13px", color: "#555"
          }}>Admin</button>
          <button onClick={onRegister} style={{
            padding: "8px 20px", background: "#cc4400", border: "none",
            borderRadius: "6px", cursor: "pointer", fontSize: "13px", color: "#fff", fontWeight: "bold"
          }}>Protect My Phone</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
        position: "relative", overflow: "hidden", paddingTop: "80px"
      }}>
        {/* decorative circles */}
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: `${120 + i * 80}px`, height: `${120 + i * 80}px`,
            borderRadius: "50%", border: "1px solid rgba(255,200,50,0.08)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)"
          }} />
        ))}

        <div style={{ textAlign: "center", zIndex: 1, padding: "0 24px", maxWidth: "700px" }}>
          <div style={{
            display: "inline-block", background: "rgba(204,68,0,0.2)", border: "1px solid rgba(204,68,0,0.4)",
            borderRadius: "20px", padding: "6px 16px", marginBottom: "24px",
            color: "#ff7744", fontSize: "12px", letterSpacing: "3px"
          }}>
            AFRICA'S PHONE RECOVERY SERVICE
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 64px)", color: "#fff", margin: "0 0 20px",
            lineHeight: 1.15, fontWeight: "bold"
          }}>
            Never Lose Your Phone <span style={{ color: "#ffc832" }}>Forever</span>
          </h1>
          <p style={{ color: "#8899bb", fontSize: "18px", lineHeight: 1.7, marginBottom: "36px" }}>
            Install Yembe PhoneGuard before your phone is stolen. If it ever gets taken,
            we track it, lock it, and photograph the thief — so you get it back.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={onRegister} style={{
              padding: "16px 36px", background: "linear-gradient(135deg, #cc4400, #ff6622)",
              border: "none", borderRadius: "10px", color: "#fff", fontSize: "16px",
              fontWeight: "bold", cursor: "pointer", letterSpacing: "1px",
              boxShadow: "0 8px 30px rgba(204,68,0,0.4)"
            }}>🛡️ Protect My Phone Now</button>
            <button style={{
              padding: "16px 36px", background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px",
              color: "#fff", fontSize: "16px", cursor: "pointer"
            }}>How It Works ↓</button>
          </div>

          {/* STATS */}
          <div style={{ display: "flex", gap: "40px", justifyContent: "center", marginTop: "60px", flexWrap: "wrap" }}>
            {[["2,400+", "Phones Protected"], ["94%", "Recovery Rate"], ["15 min", "Avg Response Time"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ color: "#ffc832", fontSize: "28px", fontWeight: "bold" }}>{n}</div>
                <div style={{ color: "#667788", fontSize: "12px", letterSpacing: "1px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ color: "#cc4400", fontSize: "12px", letterSpacing: "3px", marginBottom: "12px" }}>THE PROCESS</div>
          <h2 style={{ fontSize: "36px", margin: 0 }}>How PhoneGuard Works</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          {[
            { step: "01", icon: "📲", title: "Install & Register", desc: "Download the Yembe app and register your phone with your details and permission." },
            { step: "02", icon: "🛡️", title: "Stay Protected", desc: "Your phone is silently monitored 24/7. You live your life normally." },
            { step: "03", icon: "🚨", title: "Report Stolen", desc: "If stolen, log into Yembe and press the big red STOLEN button." },
            { step: "04", icon: "📍", title: "We Locate & Act", desc: "We track location, lock the phone remotely, and activate the front camera to photo the thief." },
          ].map((s) => (
            <div key={s.step} style={{
              background: "#fff", borderRadius: "14px", padding: "28px 24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)", position: "relative"
            }}>
              <div style={{
                position: "absolute", top: "20px", right: "20px",
                color: "#eee", fontSize: "32px", fontWeight: "bold"
              }}>{s.step}</div>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{s.icon}</div>
              <div style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ color: "#667788", fontSize: "13px", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PLANS */}
      <div style={{ background: "#1a1a2e", padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#ffc832", fontSize: "12px", letterSpacing: "3px", marginBottom: "12px" }}>PRICING</div>
          <h2 style={{ fontSize: "36px", color: "#fff", margin: "0 0 48px" }}>Choose Your Protection</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {PLANS.map((plan) => (
              <div key={plan.name} style={{
                background: "rgba(255,255,255,0.05)", border: `2px solid ${plan.color}33`,
                borderRadius: "16px", padding: "32px 24px",
                boxShadow: plan.name === "Premium" ? `0 0 40px ${plan.color}22` : "none"
              }}>
                {plan.name === "Premium" && (
                  <div style={{
                    background: "#ffc832", color: "#1a1a2e", fontSize: "10px",
                    letterSpacing: "2px", padding: "4px 12px", borderRadius: "20px",
                    display: "inline-block", marginBottom: "16px", fontWeight: "bold"
                  }}>RECOMMENDED</div>
                )}
                <div style={{ color: plan.color, fontSize: "22px", fontWeight: "bold", marginBottom: "6px" }}>{plan.name}</div>
                <div style={{ color: "#fff", fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>{plan.price}</div>
                {plan.features.map(f => (
                  <div key={f} style={{ color: "#aabbcc", fontSize: "13px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    ✓ {f}
                  </div>
                ))}
                <button onClick={onRegister} style={{
                  width: "100%", marginTop: "24px", padding: "12px",
                  background: plan.name === "Premium" ? "linear-gradient(135deg, #ffc832, #ff9500)" : "rgba(255,255,255,0.1)",
                  border: "none", borderRadius: "8px", color: plan.name === "Premium" ? "#1a1a2e" : "#fff",
                  fontWeight: "bold", cursor: "pointer", fontSize: "14px"
                }}>Get {plan.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#111", padding: "24px", textAlign: "center", color: "#445566", fontSize: "12px" }}>
        © 2024 Yembe.co.c · PhoneGuard Service · All rights reserved · Authorized use only
      </div>
    </div>
  );
}

function RegisterForm({ onBack, onSuccess }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", device: "", plan: "Basic" });
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    if (!agreed) return alert("Please agree to the terms.");
    setStep(3);
  };

  if (step === 3) return (
    <div style={{
      minHeight: "100vh", background: "#f7f4ef", display: "flex",
      alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif"
    }}>
      <div style={{ textAlign: "center", maxWidth: "400px", padding: "40px" }}>
        <div style={{ fontSize: "72px", marginBottom: "20px" }}>✅</div>
        <h2 style={{ fontSize: "28px", color: "#1a1a2e", marginBottom: "12px" }}>You're Protected!</h2>
        <p style={{ color: "#667788", lineHeight: 1.7, marginBottom: "28px" }}>
          Welcome, <strong>{form.name}</strong>! Your phone is now registered with Yembe PhoneGuard.
          You'll receive a confirmation to <strong>{form.email}</strong>.
        </p>
        <div style={{
          background: "#fff", borderRadius: "12px", padding: "20px",
          border: "1px solid #eee", marginBottom: "24px", textAlign: "left"
        }}>
          <div style={{ color: "#667788", fontSize: "12px", marginBottom: "12px", letterSpacing: "2px" }}>YOUR DETAILS</div>
          {[["Plan", form.plan], ["Device", form.device], ["Phone", form.phone]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f0f0f0", fontSize: "14px" }}>
              <span style={{ color: "#aaa" }}>{k}</span><span style={{ fontWeight: "bold" }}>{v}</span>
            </div>
          ))}
        </div>
        <button onClick={onBack} style={{
          padding: "14px 32px", background: "#cc4400", border: "none",
          borderRadius: "8px", color: "#fff", cursor: "pointer", fontWeight: "bold"
        }}>Back to Home</button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f7f4ef", fontFamily: "'Georgia', serif", padding: "40px 24px" }}>
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#667788", marginBottom: "24px", fontSize: "14px" }}>
          ← Back
        </button>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ color: "#cc4400", fontSize: "12px", letterSpacing: "3px" }}>STEP {step} OF 2</div>
          <h2 style={{ fontSize: "28px", margin: "8px 0 0" }}>{step === 1 ? "Your Details" : "Choose Plan & Agree"}</h2>
        </div>

        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          {step === 1 ? (
            <>
              {[
                { label: "Full Name", key: "name", placeholder: "e.g. James Mwangi" },
                { label: "Phone Number", key: "phone", placeholder: "+254 7XX XXX XXX" },
                { label: "Email Address", key: "email", placeholder: "you@example.com" },
                { label: "Device Model", key: "device", placeholder: "e.g. Samsung Galaxy A54" },
              ].map(({ label, key, placeholder }) => (
                <div key={key} style={{ marginBottom: "20px" }}>
                  <label style={{ color: "#667788", fontSize: "11px", letterSpacing: "2px", display: "block", marginBottom: "6px" }}>{label.toUpperCase()}</label>
                  <input value={form[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder}
                    style={{
                      width: "100%", padding: "12px 14px", border: "1px solid #ddd",
                      borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box"
                    }} />
                </div>
              ))}
              <button onClick={() => setStep(2)} style={{
                width: "100%", padding: "14px", background: "#cc4400", border: "none",
                borderRadius: "8px", color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "15px"
              }}>Continue →</button>
            </>
          ) : (
            <>
              <div style={{ marginBottom: "24px" }}>
                <label style={{ color: "#667788", fontSize: "11px", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>SELECT PLAN</label>
                {PLANS.map(plan => (
                  <div key={plan.name} onClick={() => update("plan", plan.name)}
                    style={{
                      border: `2px solid ${form.plan === plan.name ? plan.color : "#eee"}`,
                      borderRadius: "10px", padding: "14px 16px", marginBottom: "10px", cursor: "pointer",
                      background: form.plan === plan.name ? `${plan.color}11` : "#fff",
                      display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: "15px" }}>{plan.name}</div>
                      <div style={{ color: "#667788", fontSize: "12px" }}>{plan.features.join(" · ")}</div>
                    </div>
                    <div style={{ fontWeight: "bold", color: plan.color }}>{plan.price}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background: "#fff8f5", border: "1px solid #ffd0b0", borderRadius: "10px",
                padding: "16px", marginBottom: "20px", fontSize: "12px", color: "#885533", lineHeight: 1.7
              }}>
                <strong>📋 Permission & Consent:</strong> By registering, you confirm this is YOUR device and you authorize Yembe to track its location, lock it remotely, and activate its camera ONLY when you report it stolen. Yembe will never access your device without your explicit request.
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "24px" }}>
                <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                  style={{ marginTop: "2px", cursor: "pointer" }} />
                <label style={{ fontSize: "13px", color: "#667788", cursor: "pointer" }} onClick={() => setAgreed(!agreed)}>
                  I agree to the terms above. This is my own device and I give Yembe permission to protect it.
                </label>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setStep(1)} style={{
                  flex: 1, padding: "14px", background: "#f0f0f0", border: "none",
                  borderRadius: "8px", cursor: "pointer", fontSize: "14px"
                }}>← Back</button>
                <button onClick={handleSubmit} style={{
                  flex: 2, padding: "14px", background: "#cc4400", border: "none",
                  borderRadius: "8px", color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "14px"
                }}>🛡️ Activate Protection</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout }) {
  const [devices, setDevices] = useState(MOCK_REGISTERED);
  const [selected, setSelected] = useState(null);
  const [actionLog, setActionLog] = useState([
    "09:14 — System started",
    "09:22 — Tariq Ndolo reported phone STOLEN",
    "09:23 — Remote lock activated on Tecno Camon 20",
    "09:24 — Location acquired: Dar es Salaam CBD",
    "09:25 — Thief photo captured (front camera)",
  ]);
  const [tab, setTab] = useState("devices");

  const log = (msg) => setActionLog(p => [`${new Date().toLocaleTimeString()} — ${msg}`, ...p]);

  const triggerRecovery = (device, action) => {
    const actions = {
      lock: `🔒 Remote lock sent to ${device.device}`,
      photo: `📸 Thief photo requested from ${device.device}`,
      locate: `📍 Location ping sent to ${device.device}`,
      alert: `🔊 Loud alarm triggered on ${device.device}`,
    };
    log(actions[action]);
    alert(`✅ Command sent: ${actions[action]}`);
  };

  const stolenDevices = devices.filter(d => d.stolen);
  const safeDevices = devices.filter(d => !d.stolen);

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", fontFamily: "'Georgia', serif", color: "#cdd9e5" }}>

      {/* Header */}
      <div style={{
        background: "#161b22", borderBottom: "1px solid #30363d",
        padding: "16px 28px", display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "24px" }}>🛡️</span>
          <div>
            <span style={{ color: "#ffc832", fontSize: "16px", fontWeight: "bold", letterSpacing: "2px" }}>YEMBE</span>
            <span style={{ color: "#cc4400", fontSize: "12px", marginLeft: "8px" }}>PhoneGuard Admin</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {stolenDevices.length > 0 && (
            <div style={{
              background: "rgba(255,68,85,0.2)", border: "1px solid rgba(255,68,85,0.4)",
              color: "#ff4455", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold"
            }}>
              🚨 {stolenDevices.length} STOLEN DEVICE{stolenDevices.length > 1 ? "S" : ""}
            </div>
          )}
          <button onClick={onLogout} style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid #30363d",
            color: "#8899aa", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "12px"
          }}>🚪 Logout</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid #21262d" }}>
        {[
          { label: "REGISTERED", value: devices.length, color: "#ffc832" },
          { label: "PROTECTED", value: safeDevices.length, color: "#3fb950" },
          { label: "STOLEN REPORTS", value: stolenDevices.length, color: "#ff4455" },
          { label: "RECOVERED", value: 47, color: "#58a6ff" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "20px", background: "#0d1117", textAlign: "center", borderRight: "1px solid #21262d" }}>
            <div style={{ color: s.color, fontSize: "30px", fontWeight: "bold" }}>{s.value}</div>
            <div style={{ color: "#4d5566", fontSize: "10px", letterSpacing: "2px", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #21262d", padding: "0 24px" }}>
        {["devices", "stolen", "logs"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "14px 20px", background: "none", border: "none", cursor: "pointer",
            color: tab === t ? "#ffc832" : "#4d5566",
            borderBottom: tab === t ? "2px solid #ffc832" : "2px solid transparent",
            fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase"
          }}>
            {t === "stolen" && stolenDevices.length > 0 ? `${t} 🔴` : t}
          </button>
        ))}
      </div>

      <div style={{ padding: "24px 28px" }}>

        {/* ALL DEVICES */}
        {tab === "devices" && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  {["Name", "Phone", "Device", "Plan", "Location", "Status", "Actions"].map(h => (
                    <th key={h} style={{ padding: "10px 14px", color: "#4d5566", fontWeight: "normal", textAlign: "left", letterSpacing: "1px", fontSize: "11px" }}>{h.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {devices.map(d => (
                  <tr key={d.id} style={{ borderBottom: "1px solid #161b22", background: d.stolen ? "rgba(255,68,85,0.04)" : "transparent" }}>
                    <td style={{ padding: "12px 14px", color: "#cdd9e5" }}>{d.name}</td>
                    <td style={{ padding: "12px 14px", color: "#8899aa" }}>{d.phone}</td>
                    <td style={{ padding: "12px 14px", color: "#8899aa" }}>{d.device}</td>
                    <td style={{ padding: "12px 14px" }}>
                      <span style={{
                        padding: "2px 8px", borderRadius: "10px", fontSize: "11px",
                        background: d.plan === "Premium" ? "rgba(255,200,50,0.15)" : "rgba(68,136,255,0.15)",
                        color: d.plan === "Premium" ? "#ffc832" : "#4488ff"
                      }}>{d.plan}</span>
                    </td>
                    <td style={{ padding: "12px 14px", color: "#8899aa", fontSize: "12px" }}>📍 {d.location}</td>
                    <td style={{ padding: "12px 14px" }}>
                      <span style={{
                        padding: "3px 10px", borderRadius: "10px", fontSize: "11px", fontWeight: "bold",
                        background: d.stolen ? "rgba(255,68,85,0.2)" : "rgba(63,185,80,0.15)",
                        color: d.stolen ? "#ff4455" : "#3fb950"
                      }}>{d.status.toUpperCase()}</span>
                    </td>
                    <td style={{ padding: "12px 14px" }}>
                      <button onClick={() => { setSelected(d); setTab("stolen"); }} style={{
                        background: "rgba(255,200,50,0.1)", border: "1px solid rgba(255,200,50,0.3)",
                        color: "#ffc832", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", fontSize: "11px"
                      }}>Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* STOLEN / RECOVERY */}
        {tab === "stolen" && (
          <div>
            {stolenDevices.length === 0 && !selected ? (
              <div style={{ textAlign: "center", padding: "60px", color: "#3fb950" }}>
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
                <div style={{ fontSize: "16px" }}>No stolen reports right now</div>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
                {(selected ? [selected] : stolenDevices).map(d => (
                  <div key={d.id} style={{
                    background: "#161b22", border: "1px solid rgba(255,68,85,0.3)",
                    borderRadius: "14px", padding: "24px",
                    boxShadow: "0 0 30px rgba(255,68,85,0.08)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                      <div>
                        <div style={{ color: "#ff4455", fontSize: "11px", letterSpacing: "2px", marginBottom: "4px" }}>🚨 STOLEN DEVICE</div>
                        <div style={{ fontSize: "16px", fontWeight: "bold" }}>{d.name}</div>
                        <div style={{ color: "#667788", fontSize: "12px" }}>{d.device} · {d.phone}</div>
                      </div>
                    </div>
                    <div style={{ background: "#0d1117", borderRadius: "8px", padding: "12px", marginBottom: "16px", fontSize: "12px" }}>
                      <div style={{ color: "#667788", marginBottom: "4px" }}>LAST KNOWN LOCATION</div>
                      <div style={{ color: "#ffc832" }}>📍 {d.location}</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      {[
                        { action: "locate", icon: "📍", label: "Ping Location", color: "#58a6ff" },
                        { action: "lock", icon: "🔒", label: "Remote Lock", color: "#ff9944" },
                        { action: "photo", icon: "📸", label: "Thief Photo", color: "#ffc832" },
                        { action: "alert", icon: "🔊", label: "Sound Alarm", color: "#ff4455" },
                      ].map(btn => (
                        <button key={btn.action} onClick={() => triggerRecovery(d, btn.action)} style={{
                          padding: "12px 8px", background: `${btn.color}15`,
                          border: `1px solid ${btn.color}44`, borderRadius: "8px",
                          color: btn.color, cursor: "pointer", fontSize: "12px", fontWeight: "bold"
                        }}>{btn.icon} {btn.label}</button>
                      ))}
                    </div>
                    {selected && (
                      <button onClick={() => setSelected(null)} style={{
                        width: "100%", marginTop: "12px", padding: "8px",
                        background: "transparent", border: "1px solid #30363d",
                        color: "#667788", borderRadius: "6px", cursor: "pointer", fontSize: "12px"
                      }}>← Back to list</button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* LOGS */}
        {tab === "logs" && (
          <div>
            <div style={{ color: "#ffc832", fontSize: "14px", marginBottom: "16px" }}>📋 Activity Log</div>
            <div style={{ background: "#0d1117", borderRadius: "10px", padding: "20px", fontFamily: "monospace" }}>
              {actionLog.map((entry, i) => (
                <div key={i} style={{
                  padding: "7px 0", borderBottom: "1px solid #161b22",
                  color: entry.includes("STOLEN") || entry.includes("lock") ? "#ff9944" :
                    entry.includes("photo") || entry.includes("Location") ? "#ffc832" : "#4d6070",
                  fontSize: "12px"
                }}>› {entry}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ADMIN LOGIN ──────────────────────────────────────────────────────────────
function AdminLogin({ onSuccess, onBack }) {
  const [u, setU] = useState(""); const [p, setP] = useState(""); const [err, setErr] = useState("");
  const login = () => {
    if (u === "admin" && p === "yembe2024") onSuccess();
    else setErr("Invalid credentials.");
  };
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif" }}>
      <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "14px", padding: "40px", width: "340px" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "36px" }}>🛡️</div>
          <div style={{ color: "#ffc832", fontSize: "18px", letterSpacing: "2px", marginTop: "8px" }}>ADMIN LOGIN</div>
          <div style={{ color: "#4d5566", fontSize: "11px" }}>Yembe PhoneGuard</div>
        </div>
        {[["Username", u, setU, "text"], ["Password", p, setP, "password"]].map(([label, val, setter, type]) => (
          <div key={label} style={{ marginBottom: "16px" }}>
            <label style={{ color: "#4d5566", fontSize: "11px", letterSpacing: "2px", display: "block", marginBottom: "6px" }}>{label.toUpperCase()}</label>
            <input type={type} value={val} onChange={e => { setter(e.target.value); setErr(""); }}
              onKeyDown={e => e.key === "Enter" && login()}
              style={{ width: "100%", padding: "11px 13px", background: "#0d1117", border: "1px solid #30363d", borderRadius: "7px", color: "#cdd9e5", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
          </div>
        ))}
        {err && <div style={{ color: "#ff4455", fontSize: "12px", marginBottom: "12px", textAlign: "center" }}>{err}</div>}
        <button onClick={login} style={{ width: "100%", padding: "13px", background: "linear-gradient(135deg,#ffc832,#ff9500)", border: "none", borderRadius: "8px", color: "#0d1117", fontWeight: "bold", cursor: "pointer", fontSize: "14px", marginBottom: "12px" }}>
          LOGIN
        </button>
        <button onClick={onBack} style={{ width: "100%", padding: "10px", background: "transparent", border: "1px solid #30363d", borderRadius: "8px", color: "#4d5566", cursor: "pointer", fontSize: "13px" }}>
          ← Back to Site
        </button>
        <div style={{ color: "#2d3748", fontSize: "11px", textAlign: "center", marginTop: "16px" }}>Demo: admin / yembe2024</div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("landing"); // landing | register | adminLogin | admin

  if (screen === "register") return <RegisterForm onBack={() => setScreen("landing")} onSuccess={() => setScreen("landing")} />;
  if (screen === "adminLogin") return <AdminLogin onSuccess={() => setScreen("admin")} onBack={() => setScreen("landing")} />;
  if (screen === "admin") return <AdminDashboard onLogout={() => setScreen("landing")} />;
  return <LandingPage onRegister={() => setScreen("register")} onAdminLogin={() => setScreen("adminLogin")} />;
}
