import{w as h,d as p}from"./BJA16qjd.js";import{s as i}from"./UAvfk3Ig.js";import{z as y}from"./OtXKyCBO.js";const f=h([]);let u=!1;async function d(){if(u)return y(f);u=!0;const t=`
	    id,
    player1_id,
    player2_id,
    winner_id,
    tournament_id,
    round,
    location,
    date,
    created_at,

    tournaments (
      id,
      name,
      location
    ),
    player1:player1_id (
      id,
      name
    ),
    player2:player2_id (
      id,
      name
    ),
    winner:winner_id (
      id,
      name
    )
	`,{data:e,error:a}=await i.from("matches").select(t).order("date",{ascending:!1});if(a)throw a;const s=(e??[]).map(n=>({...n,tournaments:n.tournaments??[],player1:n.player1??[],player2:n.player2??[],winner:n.winner??[]}));return f.set(s),setTimeout(()=>u=!1,800),s}async function m(t){const{data:e,error:a}=await i.from("matches").insert([t]).select();if(a)throw a;return await d(),e[0]}async function M(t,e){const{error:a}=await i.from("matches").update(e).eq("id",t);if(a)throw a;await d();const n=y(f).find(w=>w.id===t);return n||void 0}async function _(t){const{error:e}=await i.from("matches").delete().eq("id",t);if(e)throw e;await d()}let c=null;const g=()=>{const t=h([]),e=h(void 0),a=p([t,e],([r,o])=>{if(r?.length&&o)return r.find(l=>l.id===o)});return c={stores:{data:t,currentMatchId:e,currentMatch:a},actions:{reload:async()=>{const r=await d();t.set(r)},createMatch:async r=>{try{await m(r)}catch(o){console.error(o)}},updateMatch:async(r,o)=>{try{await M(r,o)}catch(l){console.error(l)}},deleteMatch:async r=>{try{await _(r)}catch(o){console.error(o)}}}},c},b=()=>(c||(c=g()),c);export{b as g};
