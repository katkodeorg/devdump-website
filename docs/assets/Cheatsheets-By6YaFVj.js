import{r as o,j as e}from"./index-CJRh51M9.js";const l={Python:[{t:"List",c:`a = [3,1,2]
a.append(4); a.pop(); a.pop(0)   # pop(0) O(n)
a.sort(); a.sort(reverse=True)
a.sort(key=lambda x:(-x,x))
b = sorted(a)
a[::-1]                 # reverse
a[i:j], a[i:j:k]        # slice
[x*2 for x in a if x>1] # comprehension
grid=[[0]*c for _ in range(r)]`},{t:"Dict",c:`d = {}
d.get(k, 0)
d.setdefault(k, []).append(x)
for k,v in d.items(): ...
from collections import defaultdict, Counter
g = defaultdict(list)
cnt = Counter(nums)      # freq map
cnt.most_common(2)`},{t:"Set",c:`s = set(); s.add(1); s.discard(9)
a & b   # intersection
a | b   # union
a - b   # difference
seen = set(nums)`},{t:"Heap (min-heap)",c:`import heapq
h=[]; heapq.heappush(h,3); heapq.heappop(h)
h[0]                    # peek min
heapq.heapify(nums)     # O(n)
heapq.nlargest(k,nums)
# max-heap: push -x`},{t:"Deque / Stack / Queue",c:`from collections import deque
q = deque()
q.append(x); q.popleft()   # queue O(1)
q.appendleft(x); q.pop()   # stack/deque
stack = []; stack.append(x); stack.pop()`},{t:"Strings",c:`s.split(','); ' '.join(list)
s.strip(); s.lower(); s.replace('a','b')
ord('a')  # 97   chr(97) # 'a'
s.isdigit(); s.isalpha()
''.join(sorted(s))   # anagram key`},{t:"Binary search (bisect)",c:`import bisect
bisect.bisect_left(a, x)   # first >= x
bisect.bisect_right(a, x)  # first > x
bisect.insort(a, x)`},{t:"Misc",c:`for i,v in enumerate(a): ...
for x,y in zip(a,b): ...
from functools import cache
@cache
def dp(i): ...
float('inf'), -float('inf')
divmod(a,b)  # (a//b, a%b)`},{t:"Union-Find (DSU)",c:`par=list(range(n))
def find(x):
    while par[x]!=x:
        par[x]=par[par[x]]; x=par[x]
    return x
def union(a,b): par[find(a)]=find(b)`}],Java:[{t:"Array / List",c:`int[] a = new int[n];
Arrays.sort(a);
Arrays.fill(a, -1);
List<Integer> l = new ArrayList<>();
l.add(x); l.get(i); l.remove(i);
l.sort((x,y)->y-x);
Collections.sort(l);`},{t:"HashMap",c:`Map<Integer,Integer> m = new HashMap<>();
m.put(k,v); m.get(k);
m.getOrDefault(k,0);
m.merge(k,1,Integer::sum);   // freq++
for (var e : m.entrySet()) e.getKey();
m.containsKey(k);`},{t:"Set",c:`Set<Integer> s = new HashSet<>();
s.add(x); s.contains(x); s.remove(x);
Set<Integer> t = new TreeSet<>(); // sorted`},{t:"PriorityQueue (heap)",c:`PriorityQueue<Integer> pq = new PriorityQueue<>();      // min
PriorityQueue<Integer> mx =
  new PriorityQueue<>(Collections.reverseOrder());     // max
pq.offer(x); pq.poll(); pq.peek();`},{t:"Stack / Queue / Deque",c:`Deque<Integer> st = new ArrayDeque<>();
st.push(x); st.pop(); st.peek();     // stack
Deque<Integer> q = new ArrayDeque<>();
q.offer(x); q.poll();                // queue`},{t:"Sorting / Comparator",c:`Arrays.sort(arr, (a,b)->a[0]-b[0]);
list.sort(Comparator.comparingInt(x->x));
.thenComparing(...)  // tie-break`},{t:"String / StringBuilder",c:`s.charAt(i); s.length(); s.substring(i,j);
s.toCharArray(); s.split(",");
StringBuilder sb = new StringBuilder();
sb.append(x); sb.reverse(); sb.toString();
Integer.parseInt(s);`}],"C++":[{t:"vector",c:`vector<int> a(n, 0);
a.push_back(x); a.pop_back();
sort(a.begin(), a.end());
sort(a.rbegin(), a.rend());          // desc
reverse(a.begin(), a.end());
vector<vector<int>> g(r, vector<int>(c));`},{t:"unordered_map / map",c:`unordered_map<int,int> m;
m[k]++;  m.count(k);  m.find(k);
for (auto& [k,v] : m) ...
map<int,int> ordered;   // sorted keys`},{t:"set",c:`unordered_set<int> s;
s.insert(x); s.count(x); s.erase(x);
set<int> t;              // sorted, log n`},{t:"priority_queue (heap)",c:`priority_queue<int> mx;                 // max-heap
priority_queue<int, vector<int>,
               greater<int>> mn;         // min-heap
mx.push(x); mx.top(); mx.pop();`},{t:"stack / queue / deque",c:`stack<int> st; st.push(x); st.top(); st.pop();
queue<int> q; q.push(x); q.front(); q.pop();
deque<int> dq; dq.push_back(); dq.push_front();`},{t:"sort / comparator",c:`sort(a.begin(), a.end(),
     [](int x, int y){ return x > y; });
// pairs sort by first then second by default`},{t:"string",c:`string s;  s.size();  s.substr(i, len);
s += 'a';  s.back();  s.push_back('x');
stoi(s); to_string(x);
sort(s.begin(), s.end());  // anagram key`}],JavaScript:[{t:"Array",c:`const a = [];
a.push(x); a.pop(); a.shift(); a.unshift(x);
a.sort((x,y)=>x-y);        // numeric!
a.slice(i,j); a.splice(i,1);
a.map(x=>x*2); a.filter(x=>x>1);
a.reduce((s,x)=>s+x,0);
new Array(n).fill(0);`},{t:"Map",c:`const m = new Map();
m.set(k,v); m.get(k); m.has(k); m.delete(k);
m.set(k,(m.get(k)||0)+1);   // freq++
for (const [k,v] of m) ...`},{t:"Set",c:`const s = new Set();
s.add(x); s.has(x); s.delete(x);
[...new Set(arr)]           // dedupe
s.size`},{t:"Heap note",c:`// JS has NO built-in heap.
// Roll your own or use a sorted array
// for small inputs, or a class-based
// MinHeap with siftUp/siftDown.`},{t:"String",c:`s.length; s[i]; s.charCodeAt(0);
s.split(''); arr.join('');
s.slice(i,j); s.substring(i,j);
s.toLowerCase(); s.replaceAll('a','b');
[...s].sort().join('')      // anagram key`},{t:"Misc",c:`for (const [i,v] of a.entries()) ...
Math.max(...a); Math.min(...a);
Math.floor, Math.ceil, Math.abs;
Infinity, -Infinity;
Number.MAX_SAFE_INTEGER;`}]},p=[{title:"Latency numbers every engineer should know",rows:[["L1 cache reference","~1 ns"],["Branch mispredict","~3 ns"],["L2 cache reference","~4 ns"],["Mutex lock/unlock","~17 ns"],["Main memory (RAM) reference","~100 ns"],["Compress 1 KB (Zippy/Snappy)","~2 µs"],["Read 1 MB sequentially from RAM","~3 µs"],["SSD random read","~16 µs"],["Read 1 MB sequentially from SSD","~49 µs"],["Round trip within same datacenter","~500 µs"],["Read 1 MB sequentially from disk (HDD)","~825 µs"],["Disk seek (HDD)","~2 ms"],["Send packet CA → Netherlands → CA","~150 ms"]]},{title:"Powers of two (capacity)",rows:[["2^10","1 Thousand → 1 KB"],["2^20","1 Million → 1 MB"],["2^30","1 Billion → 1 GB"],["2^32","4 Billion (IPv4 space)"],["2^40","1 Trillion → 1 TB"],["2^50","1 Quadrillion → 1 PB"]]},{title:'Availability (the "nines"), downtime/year',rows:[["90% (one nine)","36.5 days"],["99% (two nines)","3.65 days"],["99.9% (three nines)","8.76 hours"],["99.99% (four nines)","52.6 minutes"],["99.999% (five nines)","5.26 minutes"]]},{title:"Time & throughput conversions",rows:[["Seconds in a day","86,400 (~10^5)"],["Seconds in a month","~2.5 million"],["1 million/day","≈ 12 per second"],["1 billion/month","≈ 400 per second"],["QPS = daily requests ÷ 86,400","peak ≈ 2-3× average"],["Char ≈ 1 byte (ASCII), 2-4 (UTF-8)","1 KB ≈ short post"]]},{title:"Back-of-envelope estimation recipe",bullets:["1. Clarify scale: DAU, requests/user/day, read:write ratio (often 100:1).","2. QPS = DAU × req/user ÷ 86,400. Then peak QPS ≈ 2-3× average.","3. Storage/day = writes/day × bytes/write. Multiply by retention (×365 × years).","4. Bandwidth = QPS × payload size (in and out separately).","5. Memory for cache = hot fraction (e.g. 20%) × daily data (80/20 rule).","6. Servers = peak QPS ÷ per-server QPS capacity (+ headroom).","7. Round aggressively, reviewers want the method, not precision."]},{title:"Worked example, a Twitter-like feed",bullets:["200M DAU, ~12 reads/user/day → 2.4B reads/day → ~28K QPS avg → ~70K peak.","~1M new posts/hour → ~280 writes/sec (read:write ≈ 100:1 → read-optimize).","Post ≈ 300 bytes → 24M posts/day × 300B ≈ 7 GB/day → ~2.5 TB over a year.","Cache 20% hot posts in RAM → ~1.5 GB/day of hot data → fits a Redis cluster.","Media on a CDN/object store, not the DB. Fan-out on write (hybrid for celebrities)."]}],u={margin:0,background:"#08090c",border:"1px solid var(--border2)",borderRadius:8,padding:"12px 14px",overflowX:"auto",fontSize:12.5,lineHeight:1.6,color:"#c9d1d9",fontFamily:"var(--mono, monospace)"};function h(){const[r,c]=o.useState("Languages"),[i,d]=o.useState("Python");return e.jsxs("div",{children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Cheatsheets"}),e.jsx("p",{children:"Quick lookup, language syntax for LeetCode and the numbers you need for system-design estimation."})]}),e.jsx("div",{className:"tab-bar",children:["Languages","System Design Numbers"].map(t=>e.jsx("button",{className:`tab${r===t?" active":""}`,onClick:()=>c(t),children:t},t))}),r==="Languages"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tab-bar",children:Object.keys(l).map(t=>e.jsx("button",{className:`tab${i===t?" active":""}`,onClick:()=>d(t),children:t},t))}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 1fr))",gap:12},children:l[i].map(t=>e.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:{fontWeight:700,fontSize:13.5,color:"var(--accent2)"},children:t.t}),e.jsx("pre",{style:u,children:e.jsx("code",{children:t.c})})]},t.t))})]}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 340px), 1fr))",gap:12},children:p.map(t=>e.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:10},children:[e.jsx("div",{style:{fontWeight:700,fontSize:13.5,color:"var(--accent2)"},children:t.title}),t.rows&&e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:t.rows.map(([a,s],n)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12,fontSize:12.5,padding:"4px 0",borderBottom:n<t.rows.length-1?"1px solid var(--border)":"none"},children:[e.jsx("span",{style:{color:"var(--text2)"},children:a}),e.jsx("span",{style:{fontWeight:700,whiteSpace:"nowrap",fontFamily:"var(--mono, monospace)"},children:s})]},n))}),t.bullets&&e.jsx("ul",{style:{margin:0,paddingLeft:18,display:"flex",flexDirection:"column",gap:6},children:t.bullets.map((a,s)=>e.jsx("li",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.55},children:a},s))})]},t.title))})]})}export{p as SD,h as default};
