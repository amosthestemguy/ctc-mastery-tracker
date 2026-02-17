import { useState, useEffect, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// CURRICULUM DATA — Based on actual textbooks uploaded
// ═══════════════════════════════════════════════════════════════════════════════

const BOOKS = [
  {
    id: "prealg",
    label: "PreAlgebra",
    grade: "5th Grade",
    title: "PreAlgebra (College of the Redwoods)",
    color: "#3B82F6",
    glow: "59,130,246",
    emoji: "1️⃣",
    days: 50, // 50 instructional days (10 weeks × 4 days/week + 10 Fridays for projects)
    chapters: [
      {
        id: "ch1",
        num: "Chapter 1",
        title: "The Whole Numbers",
        icon: "🔢",
        sections: [
          "1.1 An Introduction to the Whole Numbers",
          "1.2 Adding and Subtracting Whole Numbers",
          "1.3 Multiplication and Division of Whole Numbers",
          "1.4 Prime Factorization",
          "1.5 Order of Operations",
          "1.6 Solving Equations by Addition and Subtraction",
          "1.7 Solving Equations by Multiplication and Division",
        ],
      },
      {
        id: "ch2",
        num: "Chapter 2",
        title: "The Integers",
        icon: "±",
        sections: [
          "2.1 An Introduction to the Integers",
          "2.2 Adding Integers",
          "2.3 Subtracting Integers",
          "2.4 Multiplying and Dividing Integers",
          "2.5 Order of Operations with Integers",
        ],
      },
      {
        id: "ch3",
        num: "Chapter 3",
        title: "The Fundamentals of Algebra",
        icon: "x",
        sections: [
          "3.1 Variables and Expressions",
          "3.2 Simplifying Expressions",
          "3.3 Solving Equations",
          "3.4 Solving Inequalities",
        ],
      },
      {
        id: "ch4",
        num: "Chapter 4",
        title: "Fractions",
        icon: "½",
        sections: [
          "4.1 Visualizing Fractions",
          "4.2 Multiplying Fractions",
          "4.3 Dividing Fractions",
          "4.4 Adding and Subtracting Fractions",
          "4.5 Comparing Fractions",
          "4.6 Solving Equations with Fractions",
        ],
      },
      {
        id: "ch5",
        num: "Chapter 5",
        title: "Decimals",
        icon: ".",
        sections: [
          "5.1 Introduction to Decimals",
          "5.2 Adding and Subtracting Decimals",
          "5.3 Multiplying Decimals",
          "5.4 Dividing Decimals",
          "5.5 Fractions and Decimals",
          "5.6 Square Roots and the Pythagorean Theorem",
        ],
      },
      {
        id: "ch6",
        num: "Chapter 6",
        title: "Ratios and Proportions",
        icon: "∶",
        sections: [
          "6.1 Ratios and Rates",
          "6.2 Proportions",
          "6.3 Percent",
          "6.4 Applications of Percent",
        ],
      },
    ],
  },
  {
    id: "alg1",
    label: "Algebra 1",
    grade: "6th Grade",
    title: "Beginning Algebra (Tyler Wallace)",
    color: "#8B5CF6",
    glow: "139,92,246",
    emoji: "📐",
    days: 50,
    chapters: [
      {
        id: "ch0",
        num: "Chapter 0",
        title: "Pre-Algebra Review",
        icon: "↩",
        sections: [
          "0.1 Integers",
          "0.2 Fractions",
          "0.3 Order of Operations",
          "0.4 Properties of Algebra",
        ],
      },
      {
        id: "ch1",
        num: "Chapter 1",
        title: "Solving Linear Equations",
        icon: "=",
        sections: [
          "1.1 One-Step Equations",
          "1.2 Two-Step Equations",
          "1.3 General Linear Equations",
          "1.4 Solving with Fractions",
          "1.5 Formulas",
          "1.6 Absolute Value Equations",
          "1.7 Variation",
          "1.8 Application: Number/Geometry",
          "1.9 Application: Age",
          "1.10 Application: Distance",
        ],
      },
      {
        id: "ch2",
        num: "Chapter 2",
        title: "Graphing",
        icon: "📈",
        sections: [
          "2.1 Points and Lines",
          "2.2 Slope",
          "2.3 Slope-Intercept Form",
          "2.4 Point-Slope Form",
          "2.5 Parallel & Perpendicular Lines",
        ],
      },
      {
        id: "ch3",
        num: "Chapter 3",
        title: "Inequalities",
        icon: "<>",
        sections: [
          "3.1 Solve and Graph Inequalities",
          "3.2 Compound Inequalities",
          "3.3 Absolute Value Inequalities",
        ],
      },
      {
        id: "ch4",
        num: "Chapter 4",
        title: "Systems of Equations",
        icon: "∥",
        sections: [
          "4.1 Graphing",
          "4.2 Substitution",
          "4.3 Addition/Elimination",
          "4.4 Three Variables",
          "4.5 Application: Value Problems",
          "4.6 Application: Mixture Problems",
        ],
      },
    ],
  },
  {
    id: "alg2",
    label: "Algebra 2",
    grade: "7th Grade",
    title: "Intermediate Algebra (Tyler Wallace)",
    color: "#EC4899",
    glow: "236,72,153",
    emoji: "📊",
    days: 50,
    chapters: [
      {
        id: "ch5",
        num: "Chapter 5",
        title: "Polynomials",
        icon: "xⁿ",
        sections: [
          "5.1 Exponent Properties",
          "5.2 Negative Exponents",
          "5.3 Scientific Notation",
          "5.4 Introduction to Polynomials",
          "5.5 Multiply Polynomials",
          "5.6 Multiply Special Products",
          "5.7 Divide Polynomials",
        ],
      },
      {
        id: "ch6",
        num: "Chapter 6",
        title: "Factoring",
        icon: "×",
        sections: [
          "6.1 Greatest Common Factor",
          "6.2 Grouping",
          "6.3 Trinomials where a = 1",
          "6.4 Trinomials where a ≠ 1",
          "6.5 Factoring Special Products",
          "6.6 Factoring Strategy",
          "6.7 Solve by Factoring",
        ],
      },
      {
        id: "ch7",
        num: "Chapter 7",
        title: "Rational Expressions",
        icon: "p/q",
        sections: [
          "7.1 Reduce Rational Expressions",
          "7.2 Multiply and Divide",
          "7.3 Least Common Denominator",
          "7.4 Add and Subtract",
          "7.5 Complex Fractions",
          "7.6 Proportions",
          "7.7 Solving Rational Equations",
          "7.8 Application: Dimensional Analysis",
        ],
      },
      {
        id: "ch8",
        num: "Chapter 8",
        title: "Radicals",
        icon: "√",
        sections: [
          "8.1 Square Roots",
          "8.2 Higher Roots",
          "8.3 Adding Radicals",
          "8.4 Multiply and Divide Radicals",
          "8.5 Rationalize Denominators",
          "8.6 Rational Exponents",
          "8.7 Radicals of Mixed Index",
          "8.8 Complex Numbers",
        ],
      },
      {
        id: "ch9",
        num: "Chapter 9",
        title: "Quadratics",
        icon: "x²",
        sections: [
          "9.1 Solving with Radicals",
          "9.2 Solving with Exponents",
          "9.3 Complete the Square",
          "9.4 Quadratic Formula",
          "9.5 Build Quadratics From Roots",
          "9.6 Quadratic in Form",
          "9.7 Application: Rectangles",
          "9.8 Application: Teamwork",
          "9.9 Simultaneous Products",
          "9.10 Application: Revenue and Distance",
          "9.11 Graphs of Quadratics",
        ],
      },
    ],
  },
  {
    id: "precalc",
    label: "PreCalculus",
    grade: "8th Grade",
    title: "PreCalculus & Functions",
    color: "#10B981",
    glow: "16,185,129",
    emoji: "📈",
    days: 50,
    chapters: [
      {
        id: "ch10",
        num: "Chapter 10",
        title: "Functions",
        icon: "f(x)",
        sections: [
          "10.1 Function Notation",
          "10.2 Operations on Functions",
          "10.3 Inverse Functions",
          "10.4 Exponential Functions",
          "10.5 Logarithmic Functions",
          "10.6 Application: Compound Interest",
          "10.7 Trigonometric Functions",
          "10.8 Inverse Trigonometric Functions",
        ],
      },
      {
        id: "trig",
        num: "Trigonometry",
        title: "Trigonometry & Analytic Geometry",
        icon: "sin",
        sections: [
          "Unit Circle and Radian Measure",
          "Graphs of Sine and Cosine",
          "Graphs of Other Trig Functions",
          "Trigonometric Identities",
          "Sum and Difference Formulas",
          "Solving Trigonometric Equations",
        ],
      },
      {
        id: "conic",
        num: "Conics",
        title: "Conic Sections",
        icon: "○",
        sections: [
          "Circles",
          "Parabolas",
          "Ellipses",
          "Hyperbolas",
          "Polar Coordinates",
        ],
      },
      {
        id: "seq",
        num: "Sequences",
        title: "Sequences and Series",
        icon: "∑",
        sections: [
          "Arithmetic Sequences",
          "Geometric Sequences",
          "Arithmetic Series",
          "Geometric Series",
          "Binomial Theorem",
        ],
      },
    ],
  },
  {
    id: "geometry",
    label: "Geometry",
    grade: "Integrated",
    title: "Euclid's Elements (All 4 Years)",
    color: "#F59E0B",
    glow: "245,158,11",
    emoji: "📏",
    days: 200, // Spread across all 4 years
    chapters: [
      {
        id: "b1",
        num: "Book I",
        title: "Plane Geometry Foundations",
        icon: "△",
        sections: [
          "Definitions and Postulates",
          "Congruence of Triangles",
          "Parallel Lines",
          "Pythagorean Theorem",
          "Areas of Parallelograms and Triangles",
        ],
      },
      {
        id: "b2",
        num: "Book II",
        title: "Geometric Algebra",
        icon: "□",
        sections: [
          "Rectangles and Squares",
          "Application of Areas",
          "Golden Ratio",
        ],
      },
      {
        id: "b3",
        num: "Book III",
        title: "Circles",
        icon: "○",
        sections: [
          "Circle Definitions",
          "Angles and Arcs",
          "Tangents and Secants",
          "Inscribed Figures",
        ],
      },
      {
        id: "b4",
        num: "Book IV",
        title: "Regular Polygons",
        icon: "⬡",
        sections: [
          "Inscribed and Circumscribed Figures",
          "Regular Polygons in Circles",
        ],
      },
      {
        id: "b5",
        num: "Book V",
        title: "Theory of Proportions",
        icon: "∶",
        sections: [
          "Ratios and Proportions",
          "Magnitudes",
        ],
      },
      {
        id: "b6",
        num: "Book VI",
        title: "Similar Figures",
        icon: "∼",
        sections: [
          "Similar Triangles",
          "Proportional Segments",
          "Applications",
        ],
      },
      {
        id: "b11",
        num: "Book XI",
        title: "Solid Geometry",
        icon: "🔷",
        sections: [
          "Lines and Planes in Space",
          "Solid Angles",
          "Parallelepipeds",
        ],
      },
      {
        id: "b12",
        num: "Book XII",
        title: "Measurement",
        icon: "V",
        sections: [
          "Areas of Circles",
          "Volumes of Pyramids and Cones",
          "Volumes of Spheres",
        ],
      },
      {
        id: "b13",
        num: "Book XIII",
        title: "Platonic Solids",
        icon: "🔺",
        sections: [
          "Regular Polyhedra",
          "Tetrahedron, Cube, Octahedron",
          "Dodecahedron, Icosahedron",
        ],
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS & STORAGE
// ═══════════════════════════════════════════════════════════════════════════════

const STATUSES = ["not_started", "in_progress", "mastered"];
const STATUS_CONFIG = {
  not_started: { label: "Not Started", short: "○", color: "#64748B", bg: "rgba(100,116,139,0.12)", ring: "#475569" },
  in_progress: { label: "In Progress", short: "◐", color: "#F59E0B", bg: "rgba(245,158,11,0.15)", ring: "#D97706" },
  mastered: { label: "Mastered", short: "✓", color: "#22C55E", bg: "rgba(34,197,94,0.15)", ring: "#16A34A" },
};

const SKEY = "ctc_mastery_textbook_v1";
const load = () => { try { return JSON.parse(localStorage.getItem(SKEY) || "{}"); } catch { return {}; } };
const save = (d) => { try { localStorage.setItem(SKEY, JSON.stringify(d)); } catch {} };

function tid(bookId, chapId, idx) { return `${bookId}|${chapId}|${idx}`; }

function bookStats(book, store) {
  let total = 0, mastered = 0, inProgress = 0;
  book.chapters.forEach(ch => ch.sections.forEach((_, i) => {
    total++;
    const s = store[tid(book.id, ch.id, i)] || "not_started";
    if (s === "mastered") mastered++;
    else if (s === "in_progress") inProgress++;
  }));
  return { total, mastered, inProgress, notStarted: total - mastered - inProgress };
}

function chapStats(book, ch, store) {
  let total = 0, mastered = 0, inProgress = 0;
  ch.sections.forEach((_, i) => {
    total++;
    const s = store[tid(book.id, ch.id, i)] || "not_started";
    if (s === "mastered") mastered++;
    else if (s === "in_progress") inProgress++;
  });
  return { total, mastered, inProgress };
}

// ═══════════════════════════════════════════════════════════════════════════════
// UI COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function Ring({ pct, color, size, stroke = 5, children }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * Math.max(0, Math.min(1, pct));
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.7s cubic-bezier(.4,0,.2,1)" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
}

function PillBar({ mastered, inProgress, total, color }) {
  const mPct = total ? (mastered / total) * 100 : 0;
  const iPct = total ? (inProgress / total) * 100 : 0;
  return (
    <div style={{ height: 5, background: "rgba(255,255,255,0.05)", borderRadius: 99, overflow: "hidden", width: "100%" }}>
      <div style={{ height: "100%", display: "flex" }}>
        <div style={{ width: `${mPct}%`, background: "#22C55E", transition: "width 0.6s cubic-bezier(.4,0,.2,1)" }} />
        <div style={{ width: `${iPct}%`, background: "#F59E0B", transition: "width 0.6s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [store, setStore] = useState(load);
  const [activeBookId, setActiveBookId] = useState("prealg");
  const [activeChapId, setActiveChapId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [ripple, setRipple] = useState({});
  const [view, setView] = useState("learn");

  useEffect(() => { save(store); }, [store]);

  const cycleStatus = useCallback((tid) => {
    setStore(prev => {
      const cur = prev[tid] || "not_started";
      const next = STATUSES[(STATUSES.indexOf(cur) + 1) % STATUSES.length];
      setRipple(r => ({ ...r, [tid]: next }));
      setTimeout(() => setRipple(r => { const n = { ...r }; delete n[tid]; return n; }), 500);
      return { ...prev, [tid]: next };
    });
  }, []);

  const setAll = useCallback((bookId, chapId, status) => {
    setStore(prev => {
      const next = { ...prev };
      const book = BOOKS.find(b => b.id === bookId);
      const chapters = chapId ? book.chapters.filter(c => c.id === chapId) : book.chapters;
      chapters.forEach(ch => ch.sections.forEach((_, i) => { next[tid(bookId, ch.id, i)] = status; }));
      return next;
    });
  }, []);

  const activeBook = BOOKS.find(b => b.id === activeBookId);
  const bStats = bookStats(activeBook, store);

  const grand = BOOKS.reduce((acc, b) => {
    const s = bookStats(b, store);
    acc.total += s.total; acc.mastered += s.mastered; acc.inProgress += s.inProgress;
    return acc;
  }, { total: 0, mastered: 0, inProgress: 0 });

  const chaptersToShow = activeChapId
    ? activeBook.chapters.filter(c => c.id === activeChapId)
    : activeBook.chapters;

  const visibleRows = [];
  chaptersToShow.forEach(ch => {
    ch.sections.forEach((section, i) => {
      const id = tid(activeBook.id, ch.id, i);
      const status = store[id] || "not_started";
      if (filterStatus !== "all" && status !== filterStatus) return;
      if (search && !section.toLowerCase().includes(search.toLowerCase())) return;
      visibleRows.push({ tid: id, section, ch, status, i });
    });
  });

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0A0E1A;
      --surface: #0F1419;
      --surface2: #151B24;
      --border: rgba(255,255,255,0.06);
      --text: #E5E7EB;
      --muted: #6B7280;
    }
    body { background: var(--bg); font-family: 'Inter', -apple-system, sans-serif; }
    .app { min-height: 100vh; display: flex; flex-direction: column; background: var(--bg); color: var(--text); }
    .topbar { display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 60px; background: rgba(10,14,26,0.98); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 200; backdrop-filter: blur(16px); }
    .layout { display: flex; flex: 1; overflow: hidden; height: calc(100vh - 60px); }
    .sidebar { width: 220px; flex-shrink: 0; background: var(--surface); border-right: 1px solid var(--border); overflow-y: auto; }
    .sidebar::-webkit-scrollbar { width: 3px; } .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 99px; }
    .main { flex: 1; overflow-y: auto; }
    .main::-webkit-scrollbar { width: 4px; } .main::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius: 99px; }
    .book-btn { width: 100%; text-align: left; border: none; cursor: pointer; padding: 12px 14px; background: transparent; border-left: 3px solid transparent; transition: all 0.15s; }
    .book-btn:hover { background: rgba(255,255,255,0.03); }
    .book-btn.active { background: rgba(255,255,255,0.04); }
    .section-row { width: 100%; display: flex; align-items: center; gap: 11px; padding: 10px 18px; background: transparent; border: none; border-bottom: 1px solid var(--border); cursor: pointer; text-align: left; transition: background 0.15s; }
    .section-row:hover { background: rgba(255,255,255,0.025); }
    .section-row:last-child { border-bottom: none; }
    .status-dot { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; transition: all 0.25s cubic-bezier(.34,1.56,.64,1); border: 2px solid; font-family: 'JetBrains Mono', monospace; }
    .status-dot.pop { transform: scale(1.35); }
    .chap-pill { padding: 5px 12px; border-radius: 99px; font-size: 11px; font-weight: 600; cursor: pointer; border: 1px solid; transition: all 0.15s; background: transparent; }
    .chap-pill:hover { opacity: 0.85; }
    .ctrl-btn { padding: 6px 12px; border-radius: 8px; font-size: 11px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: #9CA3AF; transition: all 0.15s; font-family: 'Inter', sans-serif; }
    .ctrl-btn:hover { background: rgba(255,255,255,0.06); color: var(--text); }
    input[type=text] { outline: none; font-family: 'Inter', sans-serif; }
    input[type=text]::placeholder { color: var(--muted); }
    .dash-card { background: var(--surface2); border: 1px solid var(--border); border-radius: 12px; padding: 18px; }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="app">
        
        {/* ══════════════════════════════════════════════════════════════ */}
        {/* TOPBAR */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 17, fontWeight: 800,
              boxShadow: "0 0 20px rgba(139,92,246,0.5)",
            }}>∑</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px", lineHeight: 1.1 }}>Counting to Calculus</div>
              <div style={{ fontSize: 9, color: "#6B7280", letterSpacing: "1.2px", textTransform: "uppercase", marginTop: 2 }}>
                200-Day Mastery Tracker
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { n: grand.mastered, l: "Mastered", c: "#22C55E" },
                { n: grand.inProgress, l: "In Progress", c: "#F59E0B" },
                { n: grand.total - grand.mastered - grand.inProgress, l: "Not Started", c: "#475569" },
              ].map(({ n, l, c }) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 19, fontWeight: 800, color: c, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{n}</div>
                  <div style={{ fontSize: 9, color: "#4B5563", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <Ring pct={grand.total ? grand.mastered / grand.total : 0} color="#22C55E" size={48} stroke={4.5}>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#22C55E", fontFamily: "'JetBrains Mono', monospace" }}>
                {grand.total ? Math.round(grand.mastered / grand.total * 100) : 0}%
              </span>
            </Ring>
            <div style={{ display: "flex", gap: 5 }}>
              {["learn", "dashboard"].map(v => (
                <button key={v} onClick={() => setView(v)} className="ctrl-btn"
                  style={{
                    color: view === v ? "#E5E7EB" : "#6B7280",
                    borderColor: view === v ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)",
                    background: view === v ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)",
                    fontWeight: view === v ? 700 : 500,
                  }}>
                  {v === "learn" ? "📚 Learn" : "📊 Dashboard"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {view === "dashboard" ? (
          /* ══════════════════════════════════════════════════════════════ */
          /* DASHBOARD VIEW */
          /* ══════════════════════════════════════════════════════════════ */
          <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.6px" }}>Curriculum Progress</h2>
              <p style={{ color: "#6B7280", fontSize: 14, marginTop: 6 }}>
                Track mastery across {grand.total} topics from PreAlgebra → PreCalculus + Euclid's Elements
              </p>
            </div>

            {/* Overall */}
            <div style={{ display: "flex", gap: 18, marginBottom: 24, flexWrap: "wrap" }}>
              <div className="dash-card" style={{ flex: 1, minWidth: 220, display: "flex", gap: 24, alignItems: "center" }}>
                <Ring pct={grand.total ? grand.mastered / grand.total : 0} color="#22C55E" size={90} stroke={8}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#22C55E", lineHeight: 1 }}>
                      {grand.total ? Math.round(grand.mastered / grand.total * 100) : 0}%
                    </div>
                  </div>
                </Ring>
                <div>
                  <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 10 }}>Overall Mastery</div>
                  <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1 }}>
                    {grand.mastered}
                    <span style={{ fontSize: 16, color: "#6B7280", fontWeight: 400 }}>/{grand.total}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7280", marginTop: 6 }}>sections mastered</div>
                </div>
              </div>
              {[
                { label: "Mastered", count: grand.mastered, color: "#22C55E", icon: "✓" },
                { label: "In Progress", count: grand.inProgress, color: "#F59E0B", icon: "◐" },
                { label: "Not Started", count: grand.total - grand.mastered - grand.inProgress, color: "#64748B", icon: "○" },
              ].map(({ label, count, color, icon }) => (
                <div key={label} className="dash-card" style={{ flex: 1, minWidth: 140 }}>
                  <div style={{ fontSize: 28, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>{icon}</div>
                  <div style={{ fontSize: 34, fontWeight: 900, color, lineHeight: 1 }}>{count}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Per-book */}
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14, color: "#9CA3AF" }}>By Course</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {BOOKS.map(book => {
                const s = bookStats(book, store);
                const pct = s.total ? s.mastered / s.total : 0;
                return (
                  <div key={book.id} className="dash-card" style={{ display: "flex", alignItems: "center", gap: 18, cursor: "pointer" }}
                    onClick={() => { setActiveBookId(book.id); setActiveChapId(null); setView("learn"); }}>
                    <div style={{ fontSize: 26 }}>{book.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <div>
                          <span style={{ fontSize: 14, fontWeight: 700 }}>{book.label}: </span>
                          <span style={{ fontSize: 14, color: "#9CA3AF" }}>{book.title}</span>
                          <span style={{ fontSize: 10, color: "#6B7280", marginLeft: 10, background: "rgba(255,255,255,0.04)", padding: "2px 7px", borderRadius: 99 }}>
                            {book.grade}
                          </span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 800, color: book.color, fontFamily: "'JetBrains Mono', monospace" }}>
                          {Math.round(pct * 100)}%
                        </span>
                      </div>
                      <PillBar mastered={s.mastered} inProgress={s.inProgress} total={s.total} color={book.color} />
                      <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                        <span style={{ fontSize: 10, color: "#22C55E" }}>✓ {s.mastered} mastered</span>
                        <span style={{ fontSize: 10, color: "#F59E0B" }}>◐ {s.inProgress} in progress</span>
                        <span style={{ fontSize: 10, color: "#64748B" }}>○ {s.notStarted} not started</span>
                        <span style={{ fontSize: 10, color: "#6B7280", marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace" }}>
                          {s.total} total
                        </span>
                      </div>
                    </div>
                    <Ring pct={pct} color={book.color} size={58} stroke={5.5}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: book.color, fontFamily: "'JetBrains Mono', monospace" }}>
                        {Math.round(pct * 100)}%
                      </span>
                    </Ring>
                  </div>
                );
              })}
            </div>

            <div style={{ height: 50 }} />
          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════ */
          /* LEARN VIEW */
          /* ══════════════════════════════════════════════════════════════ */
          <div className="layout">
            
            {/* SIDEBAR */}
            <div className="sidebar" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "16px 14px 8px", fontSize: 9, letterSpacing: "2.2px", color: "#374151", textTransform: "uppercase", fontWeight: 700 }}>
                Curriculum
              </div>

              {BOOKS.map(book => {
                const s = bookStats(book, store);
                const pct = s.total ? s.mastered / s.total : 0;
                const active = activeBookId === book.id;
                return (
                  <button key={book.id} className={`book-btn${active ? " active" : ""}`}
                    style={{ borderLeftColor: active ? book.color : "transparent" }}
                    onClick={() => { setActiveBookId(book.id); setActiveChapId(null); setSearch(""); setFilterStatus("all"); }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 15 }}>{book.emoji}</span>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: active ? book.color : "#6B7280" }}>
                            {book.label}
                          </div>
                          <div style={{ fontSize: 9, color: "#374151", marginTop: 1 }}>{book.grade}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 800, color: pct === 1 ? "#22C55E" : active ? book.color : "#374151", fontFamily: "'JetBrains Mono', monospace" }}>
                        {Math.round(pct * 100)}%
                      </span>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <PillBar mastered={s.mastered} inProgress={s.inProgress} total={s.total} color={book.color} />
                    </div>
                    <div style={{ display: "flex", gap: 9, marginTop: 6 }}>
                      <span style={{ fontSize: 9, color: "#22C55E", fontFamily: "'JetBrains Mono', monospace" }}>✓{s.mastered}</span>
                      <span style={{ fontSize: 9, color: "#F59E0B", fontFamily: "'JetBrains Mono', monospace" }}>◐{s.inProgress}</span>
                      <span style={{ fontSize: 9, color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}>○{s.notStarted}</span>
                    </div>
                  </button>
                );
              })}

              <div style={{ flex: 1 }} />
              <div style={{ padding: 14, borderTop: "1px solid var(--border)", fontSize: 9, color: "#374151", lineHeight: 2 }}>
                <div><span style={{ color: "#22C55E" }}>✓</span> = Mastered</div>
                <div><span style={{ color: "#F59E0B" }}>◐</span> = In Progress</div>
                <div><span style={{ color: "#64748B" }}>○</span> = Not Started</div>
                <div style={{ marginTop: 6, color: "#1F2937" }}>Click to cycle status</div>
                <div style={{ marginTop: 10, fontSize: 8 }}>
                  <a href="https://countingtocalculus.org" style={{ color: "#3B82F6", textDecoration: "none" }}>
                    CountingToCalculus.org
                  </a>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="main">
              
              {/* Book hero */}
              <div style={{
                padding: "18px 24px 14px",
                background: `linear-gradient(to right, rgba(${activeBook.glow},0.1) 0%, transparent 65%)`,
                borderBottom: "1px solid var(--border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: activeBook.color, fontWeight: 700, marginBottom: 4 }}>
                      {activeBook.grade} · {activeBook.label}
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px" }}>{activeBook.title}</div>
                    <div style={{ display: "flex", gap: 18, marginTop: 12 }}>
                      {[
                        { n: bStats.mastered, l: "Mastered", c: "#22C55E" },
                        { n: bStats.inProgress, l: "In Progress", c: "#F59E0B" },
                        { n: bStats.notStarted, l: "Not Started", c: "#475569" },
                        { n: bStats.total, l: "Total", c: "#6B7280" },
                      ].map(({ n, l, c }) => (
                        <div key={l}>
                          <div style={{ fontSize: 20, fontWeight: 900, color: c, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{n}</div>
                          <div style={{ fontSize: 9, color: "#6B7280" }}>{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <Ring pct={bStats.total ? bStats.mastered / bStats.total : 0} color={activeBook.color} size={74} stroke={7}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 16, fontWeight: 900, color: activeBook.color, lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>
                          {bStats.total ? Math.round(bStats.mastered / bStats.total * 100) : 0}%
                        </div>
                      </div>
                    </Ring>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      <button className="ctrl-btn" onClick={() => setAll(activeBookId, activeChapId, "mastered")}
                        style={{ color: "#22C55E", borderColor: "rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.08)" }}>
                        ✓ Mark All Mastered
                      </button>
                      <button className="ctrl-btn" onClick={() => setAll(activeBookId, activeChapId, "not_started")}
                        style={{ color: "#EF4444", borderColor: "rgba(239,68,68,0.25)", background: "rgba(239,68,68,0.08)" }}>
                        ↺ Reset {activeChapId ? "Chapter" : "Book"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chapter pills */}
                <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
                  <button className="chap-pill"
                    style={{
                      borderColor: !activeChapId ? activeBook.color : "rgba(255,255,255,0.07)",
                      color: !activeChapId ? activeBook.color : "#6B7280",
                      background: !activeChapId ? `rgba(${activeBook.glow},0.12)` : "transparent",
                    }}
                    onClick={() => setActiveChapId(null)}>
                    All Chapters
                  </button>
                  {activeBook.chapters.map(ch => {
                    const s = chapStats(activeBook, ch, store);
                    const active = activeChapId === ch.id;
                    return (
                      <button key={ch.id} className="chap-pill"
                        style={{
                          borderColor: active ? activeBook.color : "rgba(255,255,255,0.06)",
                          color: active ? activeBook.color : "#6B7280",
                          background: active ? `rgba(${activeBook.glow},0.12)` : "transparent",
                        }}
                        onClick={() => setActiveChapId(active ? null : ch.id)}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{ch.icon}</span>
                        {" "}{ch.num}
                        {s.mastered > 0 && <span style={{ color: "#22C55E", marginLeft: 4 }}>✓{s.mastered}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search/filter */}
              <div style={{
                display: "flex", gap: 8, padding: "12px 24px", alignItems: "center",
                background: "var(--surface)", borderBottom: "1px solid var(--border)", flexWrap: "wrap",
              }}>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search sections…"
                  style={{
                    flex: 1, minWidth: 150, padding: "8px 14px", borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)",
                    color: "#E5E7EB", fontSize: 12,
                  }} />
                {[["all", "All"], ["not_started", "○ Not Started"], ["in_progress", "◐ In Progress"], ["mastered", "✓ Mastered"]].map(([k, l]) => {
                  const s = k === "all" ? null : STATUS_CONFIG[k];
                  return (
                    <button key={k} className="ctrl-btn" onClick={() => setFilterStatus(k)}
                      style={{
                        color: filterStatus === k ? (s?.color || activeBook.color) : "#6B7280",
                        background: filterStatus === k ? (s ? s.bg : `rgba(${activeBook.glow},0.1)`) : "rgba(255,255,255,0.02)",
                        borderColor: filterStatus === k ? (s?.ring || activeBook.color) : "rgba(255,255,255,0.06)",
                        fontWeight: filterStatus === k ? 700 : 500,
                      }}>{l}</button>
                  );
                })}
                <span style={{ fontSize: 10, color: "#374151", fontFamily: "'JetBrains Mono', monospace" }}>
                  {visibleRows.length} sections
                </span>
              </div>

              {/* Sections */}
              <div style={{ flex: 1, padding: "16px 24px 32px" }}>
                {chaptersToShow.map(ch => {
                  const rows = visibleRows.filter(r => r.ch.id === ch.id);
                  if (rows.length === 0 && (search || filterStatus !== "all")) return null;
                  const s = chapStats(activeBook, ch, store);
                  const renderRows = rows.length > 0 ? rows :
                    ch.sections.map((section, i) => ({
                      tid: tid(activeBook.id, ch.id, i),
                      section,
                      ch,
                      status: store[tid(activeBook.id, ch.id, i)] || "not_started",
                      i,
                    }));

                  return (
                    <div key={ch.id} style={{ marginBottom: 16 }}>
                      {/* Chapter header */}
                      <div style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "10px 18px", background: "var(--surface2)",
                        border: "1px solid var(--border)", borderRadius: "10px 10px 0 0",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 3, height: 20, background: activeBook.color, borderRadius: 99 }} />
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: activeBook.color, marginRight: 3 }}>
                            {ch.icon}
                          </span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#D1D5DB" }}>{ch.num}: {ch.title}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                          <div style={{ width: 80 }}>
                            <PillBar mastered={s.mastered} inProgress={s.inProgress} total={s.total} color={activeBook.color} />
                          </div>
                          <span style={{ fontSize: 11, color: s.mastered === s.total && s.total > 0 ? "#22C55E" : "#6B7280", minWidth: 32, fontFamily: "'JetBrains Mono', monospace" }}>
                            {s.total ? Math.round(s.mastered / s.total * 100) : 0}%
                          </span>
                          <span style={{
                            fontSize: 10, background: "rgba(34,197,94,0.12)", color: "#22C55E",
                            padding: "3px 9px", borderRadius: 99, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                          }}>
                            {s.mastered}/{s.total}
                          </span>
                        </div>
                      </div>

                      {/* Sections list */}
                      <div style={{ border: "1px solid var(--border)", borderTop: "none", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
                        {renderRows.map((row, ri) => {
                          const cfg = STATUS_CONFIG[row.status];
                          const isRipple = ripple[row.tid];
                          const rippleCfg = isRipple ? STATUS_CONFIG[isRipple] : null;
                          return (
                            <button key={row.tid} className="section-row" onClick={() => cycleStatus(row.tid)}
                              title="Click to cycle: Not Started → In Progress → Mastered"
                              style={{
                                background: isRipple ? rippleCfg.bg : ri % 2 === 0 ? "rgba(15,20,25,0.6)" : "rgba(10,14,26,0.4)",
                              }}>
                              <div className={`status-dot${isRipple ? " pop" : ""}`}
                                style={{ borderColor: cfg.ring, background: row.status !== "not_started" ? cfg.bg : "transparent", color: cfg.color }}>
                                {cfg.short}
                              </div>
                              <span style={{
                                flex: 1, fontSize: 13, fontWeight: 400, lineHeight: 1.5,
                                color: row.status === "mastered" ? "#86EFAC"
                                  : row.status === "in_progress" ? "#FDE68A" : "#9CA3AF",
                                transition: "color 0.2s",
                              }}>
                                {row.section}
                              </span>
                              <span style={{
                                fontSize: 10, padding: "4px 11px", borderRadius: 99,
                                background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.ring}`,
                                fontWeight: 600, minWidth: 88, textAlign: "center",
                                transition: "all 0.2s", flexShrink: 0,
                              }}>
                                {cfg.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {visibleRows.length === 0 && (search || filterStatus !== "all") && (
                  <div style={{ textAlign: "center", padding: "70px 20px", color: "#374151", fontSize: 14 }}>
                    No sections match your search or filter.
                  </div>
                )}

                <div style={{ textAlign: "center", padding: "24px 0 0", fontSize: 10, color: "#1F2937" }}>
                  Counting to Calculus · countingtocalculus.org · Where Classical Education Meets STEM Excellence
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
