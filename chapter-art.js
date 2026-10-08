// Original conceptual artwork for book themes; case art remains separate.
const CHAPTER_ART={
'chapter-0':['A crossroads above a Japanese city contrasts a closed gate with an open route to shelter','日本城市上方的岔路，對比關閉關卡與通往庇護的開放路徑'],
'chapter-1':['Two friends play a ball game beside the sea','兩位朋友在海邊玩球類遊戲'],
'chapter-2':['A bank district and narrowing water channel suggest funding pressure','銀行區與收窄水道呈現融資壓力'],
'chapter-3':['An oracle pavilion contrasts with a prism experiment','神諭亭與稜鏡實驗形成對比'],
'chapter-4':['A racket court sits between sunshine and rain','球拍運動場處於晴天與雨天之間'],
'chapter-5':['Two squash players practise with attention to the ball','兩位壁球選手專注於球的練習'],
'chapter-6':['A ball encounters gates and changed game boundaries','球遇到關卡及改變了的遊戲界線'],
'chapter-7':['Chess and checkers boards show different reference frames','國際象棋與跳棋棋盤呈現不同參考框架'],
'chapter-8':['An empty seat and open exit beside a probability game','概率遊戲旁的空座位及開放出口'],
'chapter-9':['Horses race through a course with repeated entry gates','馬匹在設有多重入場關卡的賽道上競跑'],
'chapter-10':['A camouflaged moth and a magnifying lens invite closer inspection','偽裝的飛蛾與放大鏡引導仔細觀察'],
'chapter-11':['Market observers discuss a busy crowd scene','市場觀察者討論熱鬧的群眾場景'],
'chapter-12':['Falling balls form a distribution while a channel removes tokens','落球形成分佈，旁邊水道取走部分代幣'],
'chapter-13':['Bridges link island markets while another island remains separate','橋樑連接島上市場，另一島嶼保持分離'],
'chapter-14':['A piano sequence turns into systematically arranged counting beads','鋼琴音序變成有系統排列的計數珠'],
'chapter-15':['Market stalls and waterways show interdependent roles','市場攤檔與水道呈現相互依存的角色'],
'chapter-16':['Two anglers discuss the changing river current','兩位釣魚者討論改變了的河流流向']
};
const CHAPTER_IDEAS={
0:['A convincing view still needs a way to survive until it can be tested.','令人信服的看法，仍需要生存空間，才有機會接受驗證。'],
1:['Look at the rules and conditions surrounding the contest, not just the player’s intention.','看看競賽周圍的規則與條件，而不只看選手的意圖。'],
2:['A funding constraint can change what someone is able to do, even before their view changes.','融資限制可在看法改變前，先改變一個人能做的事。'],
3:['Ask what observation could prove the claim wrong. Atmosphere and authority do not replace a test.','問甚麼觀察可以證明主張錯誤。氣氛與權威不能取代測試。'],
4:['Conditions can change. A rebound story needs evidence about frequency and timing.','條件可以改變。反彈故事需要頻率與時間方面的證據。'],
5:['Use feedback to distinguish useful practice from an inherited convention.','利用回饋區分有用練習與沿襲的慣例。'],
6:['A payoff depends on the rules and possible consequences as well as the intended move.','收益取決於規則與可能後果，也取決於打算怎樣行動。'],
7:['Similar-looking contests can reward different habits. Identify the frame before transferring a method.','看似相似的競賽，可能獎勵不同習慣。移植方法前，先辨認框架。'],
8:['The option not to participate belongs in the decision, alongside the possible payoff and cost.','不參與的選項應納入決定，與可能收益及成本一起考慮。'],
9:['Consider the competitive field and the deductions before treating a favourite as good value.','把熱門對象視為有價值前，先考慮競爭環境與扣減成本。'],
10:['A recognisable picture suggests a question; it does not establish a predictive rule.','可辨認的圖像提示問題，但不能確立預測規則。'],
11:['Separate the feeling of excitement from evidence relevant to the next decision.','把興奮的感受與下一步決定所需的證據分開。'],
12:['A historical pattern needs a comparison, a cost calculation and checks in other conditions.','歷史模式需要比較、成本計算，以及在其他條件下的檢查。'],
13:['Look for a mechanism and shared causes. Two series moving together are not enough.','尋找機制與共同原因。兩組數據一起移動並不足夠。'],
14:['Define what counts, then record the misses as carefully as the hits.','定義甚麼算數，然後像記錄成功一樣仔細記錄失敗。'],
15:['Ask who participates, what constrains them and how their actions affect others.','問誰在參與、甚麼限制他們，以及其行動怎樣影響其他人。'],
16:['Observe the conditions again when a method stops working; adaptation starts with noticing change.','方法失效時，再次觀察條件；適應從察覺變化開始。']
};
function lessonChapter(l){const en=DATA_EN.lessons.find(x=>x.id===l.id),match=en?.chapter.match(/^Chapter (\d+)/);return match?Number(match[1]):0;}
function chapterCover(id,cls='chapter-art'){return `<button type="button" class="chapter-art-open" data-art-open="${id}" aria-label="${esc(t('Explore this illustration','探索這幅插畫'))}">${artImage('chapter-'+id,cls)}<span class="art-open-hint">${t('Explore the idea ↗','探索背後想法 ↗')}</span></button>`;}
function chapterPreview(){const ids=[1,7,14,15];return `<section class="visual-shelf"><div class="section-heading"><div><span class="label">${t('17 NEW ILLUSTRATIONS','17幅新插畫')}</span><h2>${t('Explore an idea through a picture.','從一幅圖，探索一個想法。')}</h2><p>${t('Choose a scene to see the chapter’s question, then follow it into a lesson.','選一個場景，看看章節問題，再進入相關課程。')}</p></div><a class="text-link" href="#library">${t('See all 16 chapters','查看全部16章')} ↗</a></div><div class="visual-shelf-grid">${ids.map(id=>{const c=DATA.chapters.find(c=>c.id===id);return `<article>${chapterCover(id,'shelf-art')}<span class="label">${t('CHAPTER','第')} ${id}${t('','章')}</span><h3>${esc(c.title)}</h3><a class="text-link" href="#lesson/${c.lesson}">${t('Read the related lesson','閱讀相關課程')} ↗</a></article>`;}).join('')}</div><p class="art-disclosure">${t('Original AI-generated concept art. Chapter imagery illustrates themes; it is not a record of historical events.','原創AI概念插畫。章節圖像說明主題，並非歷史事件紀錄。')}</p></section>`;}
let artDialogIndex=0,artReturnFocus=null;
function artDialog(){let d=document.getElementById('art-dialog');if(!d){d=document.createElement('dialog');d.id='art-dialog';d.className='art-dialog';d.setAttribute('aria-labelledby','art-dialog-title');document.body.append(d);d.addEventListener('close',()=>{document.body.classList.remove('art-dialog-open');if(artReturnFocus?.isConnected)artReturnFocus.focus({preventScroll:true});});d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});d.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showChapterArt((artDialogIndex+(e.key==='ArrowLeft'?16:1))%17,false);}});}return d;}
function showChapterArt(id,opening=true){const d=artDialog(),c=DATA.chapters.find(c=>c.id===id),title=c?.title||t('Opening · Survival before conviction','開篇・先求生存，再談信念');artDialogIndex=id;if(opening)artReturnFocus=document.activeElement;d.innerHTML=`<div class="art-dialog-toolbar"><span>${t('ILLUSTRATED STUDY EDITION','插畫學習版')} · ${id===0?t('OPENING','開篇'):t('CHAPTER ','第')+id+t('','章')}</span><button type="button" class="art-dialog-close" aria-label="${t('Close illustration','關閉插畫')}">×</button></div>${artImage('chapter-'+id,'art-dialog-image',false)}<div class="art-dialog-copy"><span class="label">${t('THE QUESTION BEHIND THE SCENE','場景背後的問題')}</span><h2 id="art-dialog-title">${esc(title)}</h2><p class="art-dialog-idea">${esc(t(...CHAPTER_IDEAS[id]))}</p>${c?`<p>${esc(c.summary)}</p>`:''}<p class="art-disclosure">${t('AI-generated conceptual illustration; the scene is not documentary evidence.','AI生成概念插畫；場景並非紀錄證據。')}</p><div class="art-dialog-actions"><button type="button" class="art-dialog-prev" aria-label="${t('Previous illustration','上一幅插畫')}">←</button><span>${id+1} / 17</span><button type="button" class="art-dialog-next" aria-label="${t('Next illustration','下一幅插畫')}">→</button><a class="btn gold art-dialog-read" href="#lesson/${c?.lesson||'1-1'}">${t('Read the related lesson','閱讀相關課程')} ↗</a></div></div>`;d.querySelector('.art-dialog-close').onclick=()=>d.close();d.querySelector('.art-dialog-prev').onclick=()=>showChapterArt((id+16)%17,false);d.querySelector('.art-dialog-next').onclick=()=>showChapterArt((id+1)%17,false);d.querySelector('.art-dialog-read').onclick=()=>d.close();if(!d.open){d.showModal();document.body.classList.add('art-dialog-open');}else{d.querySelector('.art-dialog-close').focus({preventScroll:true});d.scrollTop=0;}}
function initArtwork(){if(!document.body.dataset.artworkBound){document.body.dataset.artworkBound='true';document.addEventListener('click',e=>{const b=e.target.closest('[data-art-open]');if(b)showChapterArt(Number(b.dataset.artOpen));});}const d=document.getElementById('art-dialog');if(d?.open)showChapterArt(artDialogIndex,false);}
