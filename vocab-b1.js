/* ══════════════════════════════════════════════════════════════
   BANDUP · vocab-b1.js · Lô cụm từ bậc BAND 4.0 → 5.0
   ──────────────────────────────────────────────────────────────
   15 từ hạt nhân (chọn từ Academic Word List) × 4 cụm = 60 cụm.
   Schema mỗi cụm:
     id    : định danh duy nhất, KHÔNG BAO GIỜ đổi (giữ lịch ôn)
     core  : từ hạt nhân AWL — dùng để gom chùm khi học lần đầu
     band  : mã bậc (f · b1 · b2 · b3 · b4 · b5)
     chunk : cụm từ — đơn vị học và ôn
     vi    : nghĩa tiếng Việt (bậc ≤ b3); bậc b4+ dùng trường en
     ex    : câu ví dụ, PHẢI chứa nguyên văn chunk hoặc inEx
     inEx  : (tuỳ chọn) dạng biến đổi của chunk xuất hiện trong ex
     gap   : từ bị ẩn trong quiz điền khuyết
     trap  : cụm sai mà người Việt hay viết/nói
     why   : giải thích vì sao trap sai
   ══════════════════════════════════════════════════════════════ */

window.BANDUP_VOCAB = (window.BANDUP_VOCAB || []).concat([

/* ─── 01 · BENEFIT ─────────────────────────────────────────── */
{id:"b1-benefit-01", core:"benefit", band:"b1",
 chunk:"the main benefit of", vi:"lợi ích chính của",
 ex:"The main benefit of online learning is that students can study at any time.",
 gap:"benefit", trap:"the main benefit for",
 why:"Nói lợi ích CỦA một việc thì dùng of. Dùng for khi nói lợi ích cho AI: a benefit for students."},

{id:"b1-benefit-02", core:"benefit", band:"b1",
 chunk:"benefit greatly from", vi:"hưởng lợi rất nhiều từ",
 ex:"Small businesses benefit greatly from lower taxes.",
 gap:"benefit", trap:"benefit greatly of",
 why:"Khi benefit là động từ, luôn đi với from. \"Benefit of\" chỉ đúng khi benefit là danh từ."},

{id:"b1-benefit-03", core:"benefit", band:"b1",
 chunk:"health benefits", vi:"lợi ích về sức khoẻ",
 ex:"Walking to work has real health benefits.",
 gap:"health", trap:"healthy benefits",
 why:"Danh từ health đứng trước làm định ngữ, không dùng tính từ healthy. So sánh: health problems, health care."},

{id:"b1-benefit-04", core:"benefit", band:"b1",
 chunk:"be of benefit to", vi:"có ích cho",
 ex:"The new library will be of benefit to the whole community.",
 inEx:"be of benefit to",
 gap:"benefit", trap:"be of benefit for",
 why:"Cấu trúc cố định be of benefit TO somebody. Đây là cách nói trang trọng của \"be useful for\"."},

/* ─── 02 · CREATE ──────────────────────────────────────────── */
{id:"b1-create-01", core:"create", band:"b1",
 chunk:"create jobs", vi:"tạo ra việc làm",
 ex:"The new factory will create jobs for local people.",
 gap:"create", trap:"make jobs",
 why:"Việc làm, cơ hội, ấn tượng đều đi với create. \"Make jobs\" là lỗi dịch thẳng từ tiếng Việt."},

{id:"b1-create-02", core:"create", band:"b1",
 chunk:"create opportunities", vi:"tạo ra cơ hội",
 ex:"Studying abroad can create opportunities that would not exist at home.",
 gap:"opportunities", trap:"create chances",
 why:"Trong văn viết học thuật dùng opportunities. Chance thiên về may rủi, nghe kém trang trọng."},

{id:"b1-create-03", core:"create", band:"b1",
 chunk:"create a good impression", vi:"tạo ấn tượng tốt",
 ex:"Arriving early helps you create a good impression at an interview.",
 gap:"impression", trap:"create a good impress",
 why:"Impress là động từ, impression mới là danh từ. Sau mạo từ a phải là danh từ."},

{id:"b1-create-04", core:"create", band:"b1",
 chunk:"create serious problems", vi:"gây ra vấn đề nghiêm trọng",
 ex:"Heavy traffic creates serious problems for people living in the city centre.",
 inEx:"creates serious problems",
 gap:"problems", trap:"create serious problem",
 why:"Problem đếm được — nói chung chung phải dùng số nhiều problems, hoặc thêm a: a serious problem."},

/* ─── 03 · MAJOR ───────────────────────────────────────────── */
{id:"b1-major-01", core:"major", band:"b1",
 chunk:"a major problem", vi:"một vấn đề lớn",
 ex:"Air pollution is a major problem in most large cities.",
 gap:"major", trap:"a majority problem",
 why:"Major là tính từ (lớn, chủ yếu); majority là danh từ (đa số). Hai từ khác hẳn chức năng."},

{id:"b1-major-02", core:"major", band:"b1",
 chunk:"play a major role", vi:"đóng vai trò lớn",
 ex:"Parents play a major role in a child's education.",
 gap:"role", trap:"play a major rule",
 why:"Role là vai trò, rule là quy tắc. Hai từ phát âm gần giống nên rất hay bị viết nhầm."},

{id:"b1-major-03", core:"major", band:"b1",
 chunk:"a major change", vi:"một thay đổi lớn",
 ex:"Working from home was a major change for many employees.",
 gap:"change", trap:"a major changing",
 why:"Sau mạo từ a cần danh từ change. Changing là V-ing, không dùng ở vị trí này."},

{id:"b1-major-04", core:"major", band:"b1",
 chunk:"the major cause of", vi:"nguyên nhân chính của",
 ex:"Smoking is still the major cause of lung disease.",
 gap:"cause", trap:"the major cause for",
 why:"Cause luôn đi với of khi chỉ nguyên nhân của điều gì. \"Reason for\" mới dùng for."},

/* ─── 04 · REQUIRE ─────────────────────────────────────────── */
{id:"b1-require-01", core:"require", band:"b1",
 chunk:"be required to", vi:"bị/được yêu cầu phải",
 ex:"All students are required to attend the first lecture.",
 inEx:"are required to",
 gap:"required", trap:"be required doing",
 why:"Sau be required luôn là to + động từ nguyên mẫu, không phải V-ing."},

{id:"b1-require-02", core:"require", band:"b1",
 chunk:"meet the requirements", vi:"đáp ứng các yêu cầu",
 ex:"Your application will be rejected if it does not meet the requirements.",
 gap:"meet", trap:"reach the requirements",
 why:"Yêu cầu, tiêu chuẩn, thời hạn đều đi với meet: meet the standard, meet a deadline."},

{id:"b1-require-03", core:"require", band:"b1",
 chunk:"require a lot of time", vi:"đòi hỏi nhiều thời gian",
 ex:"Learning a language properly requires a lot of time and patience.",
 inEx:"requires a lot of time",
 gap:"require", trap:"require many time",
 why:"Time không đếm được nên dùng a lot of hoặc much, không dùng many."},

{id:"b1-require-04", core:"require", band:"b1",
 chunk:"require immediate attention", vi:"cần được chú ý ngay lập tức",
 ex:"These safety issues require immediate attention from the manager.",
 gap:"immediate", trap:"require immediately attention",
 why:"Trước danh từ attention phải dùng tính từ immediate, không dùng trạng từ immediately."},

/* ─── 05 · AREA ────────────────────────────────────────────── */
{id:"b1-area-01", core:"area", band:"b1",
 chunk:"a rural area", vi:"một vùng nông thôn",
 ex:"Public transport is often poor in a rural area.",
 gap:"rural", trap:"a rural areas",
 why:"Mạo từ a luôn đi với danh từ số ít. Muốn dùng số nhiều thì bỏ a: rural areas."},

{id:"b1-area-02", core:"area", band:"b1",
 chunk:"urban areas", vi:"các khu vực đô thị",
 ex:"House prices in urban areas have risen sharply.",
 gap:"urban", trap:"urban aeras",
 why:"Lỗi chính tả rất hay gặp khi gõ nhanh. Trong bài thi máy, sai một chữ là mất trọn câu."},

{id:"b1-area-03", core:"area", band:"b1",
 chunk:"in the area of", vi:"trong lĩnh vực",
 ex:"She works in the area of environmental research.",
 gap:"area", trap:"in the area about",
 why:"Cụm cố định in the area OF + lĩnh vực. Đây là nghĩa \"lĩnh vực\", không phải \"khu vực\"."},

{id:"b1-area-04", core:"area", band:"b1",
 chunk:"cover a large area", vi:"bao phủ một diện tích rộng",
 ex:"The national park covers a large area of forest.",
 inEx:"covers a large area",
 gap:"large", trap:"cover a big area",
 why:"Trong văn viết học thuật, large trang trọng hơn big. Big nghe như văn nói."},

/* ─── 06 · ENVIRONMENT ─────────────────────────────────────── */
{id:"b1-environment-01", core:"environment", band:"b1",
 chunk:"protect the environment", vi:"bảo vệ môi trường",
 ex:"Governments must do more to protect the environment.",
 gap:"protect", trap:"protect environment",
 why:"Environment theo nghĩa môi trường tự nhiên luôn có the. Bỏ the là lỗi mạo từ kinh điển."},

{id:"b1-environment-02", core:"environment", band:"b1",
 chunk:"damage the environment", vi:"gây hại cho môi trường",
 ex:"Burning coal damages the environment in several ways.",
 inEx:"damages the environment",
 gap:"damage", trap:"damage to the environment",
 why:"Damage là động từ đi thẳng với tân ngữ, không cần to. Chỉ khi damage là danh từ mới có: damage to the environment."},

{id:"b1-environment-03", core:"environment", band:"b1",
 chunk:"a safe environment", vi:"một môi trường an toàn",
 ex:"Children need a safe environment in which to grow up.",
 gap:"safe", trap:"a safety environment",
 why:"Safe là tính từ, safety là danh từ. Trước danh từ environment cần tính từ safe."},

{id:"b1-environment-04", core:"environment", band:"b1",
 chunk:"environmental problems", vi:"các vấn đề về môi trường",
 ex:"Cities across the world face similar environmental problems.",
 gap:"environmental", trap:"environment problems",
 why:"Ở đây cần dạng tính từ environmental. So sánh: environmental damage, environmental policy."},

/* ─── 07 · INCOME ──────────────────────────────────────────── */
{id:"b1-income-01", core:"income", band:"b1",
 chunk:"a source of income", vi:"một nguồn thu nhập",
 ex:"Tourism is an important source of income for the region.",
 inEx:"source of income",
 gap:"source", trap:"a source of incomes",
 why:"Trong cụm này income không đếm được. Chỉ dùng incomes khi nói thu nhập của nhiều nhóm người khác nhau."},

{id:"b1-income-02", core:"income", band:"b1",
 chunk:"monthly income", vi:"thu nhập hàng tháng",
 ex:"He spends a third of his monthly income on rent.",
 gap:"monthly", trap:"month income",
 why:"Cần dạng tính từ monthly. So sánh: a monthly payment, an annual income."},

{id:"b1-income-03", core:"income", band:"b1",
 chunk:"increase their income", vi:"tăng thu nhập của họ",
 ex:"Many farmers grow a second crop to increase their income.",
 gap:"increase", trap:"raise up their income",
 why:"Increase đi thẳng với tân ngữ, không có up. \"Raise up\" là lỗi thừa từ rất hay gặp."},

{id:"b1-income-04", core:"income", band:"b1",
 chunk:"low-income families", vi:"các gia đình có thu nhập thấp",
 ex:"The scheme provides free school meals for low-income families.",
 gap:"low", trap:"low income families",
 why:"Khi hai từ ghép lại làm tính từ đứng trước danh từ thì phải có gạch nối. So sánh: a five-year plan, a well-known writer."},

/* ─── 08 · PERIOD ──────────────────────────────────────────── */
{id:"b1-period-01", core:"period", band:"b1",
 chunk:"over a long period of time", vi:"trong một khoảng thời gian dài",
 ex:"These changes happened slowly, over a long period of time.",
 gap:"period", trap:"in a long period of time",
 why:"Nói về sự việc kéo dài xuyên suốt thì dùng over, không dùng in. Cụm này rất hay dùng trong Writing Task 1."},

{id:"b1-period-02", core:"period", band:"b1",
 chunk:"during this period", vi:"trong giai đoạn này",
 ex:"During this period, the number of visitors doubled.",
 gap:"during", trap:"during of this period",
 why:"During là giới từ, sau nó đi thẳng danh từ, không bao giờ có of."},

{id:"b1-period-03", core:"period", band:"b1",
 chunk:"a short period", vi:"một khoảng thời gian ngắn",
 ex:"Prices fell for a short period before rising again.",
 gap:"short", trap:"a short periods",
 why:"Mạo từ a đi với danh từ số ít period."},

{id:"b1-period-04", core:"period", band:"b1",
 chunk:"the same period last year", vi:"cùng kỳ năm ngoái",
 ex:"Sales were 20% higher than in the same period last year.",
 gap:"same", trap:"the same period of last year",
 why:"Không cần of. Cụm này gần như bắt buộc phải biết khi mô tả biểu đồ trong Writing Task 1."},

/* ─── 09 · RESEARCH ────────────────────────────────────────── */
{id:"b1-research-01", core:"research", band:"b1",
 chunk:"do research on", vi:"nghiên cứu về",
 ex:"Her team is doing research on air quality in schools.",
 inEx:"doing research on",
 gap:"research", trap:"make research on",
 why:"Research đi với do hoặc conduct, không bao giờ đi với make. Đây là lỗi collocation bị trừ điểm nặng."},

{id:"b1-research-02", core:"research", band:"b1",
 chunk:"research shows that", vi:"nghiên cứu cho thấy rằng",
 ex:"Research shows that regular exercise improves sleep.",
 gap:"shows", trap:"researches show that",
 why:"Research không đếm được, không có dạng researches, và luôn chia động từ số ít."},

{id:"b1-research-03", core:"research", band:"b1",
 chunk:"carry out research", vi:"tiến hành nghiên cứu",
 ex:"The university carried out research into student stress.",
 inEx:"carried out research",
 gap:"carry", trap:"carry on research",
 why:"Carry out là tiến hành, thực hiện; carry on là tiếp tục. Hai phrasal verb nghĩa khác hẳn nhau."},

{id:"b1-research-04", core:"research", band:"b1",
 chunk:"recent research suggests", vi:"nghiên cứu gần đây gợi ý rằng",
 ex:"Recent research suggests that sleep affects memory more than we thought.",
 gap:"recent", trap:"recently research suggests",
 why:"Trước danh từ research phải dùng tính từ recent, không dùng trạng từ recently."},

/* ─── 10 · SIMILAR ─────────────────────────────────────────── */
{id:"b1-similar-01", core:"similar", band:"b1",
 chunk:"similar to", vi:"giống với, tương tự như",
 ex:"The new model is very similar to the old one.",
 gap:"similar", trap:"similar with",
 why:"Similar luôn đi với to. \"Similar with\" là lỗi giới từ phổ biến nhất với từ này."},

{id:"b1-similar-02", core:"similar", band:"b1",
 chunk:"in a similar way", vi:"theo cách tương tự",
 ex:"Both cities solved the problem in a similar way.",
 gap:"way", trap:"in a same way",
 why:"Same luôn đi với the, không đi với a. Muốn dùng a thì phải chọn similar."},

{id:"b1-similar-03", core:"similar", band:"b1",
 chunk:"quite similar", vi:"khá giống nhau",
 ex:"The two graphs look quite similar at first glance.",
 gap:"quite", trap:"quite same",
 why:"Không nói \"quite same\". Phải là quite similar, hoặc almost the same."},

{id:"b1-similar-04", core:"similar", band:"b1",
 chunk:"a similar pattern", vi:"một xu hướng tương tự",
 ex:"Sales in Japan followed a similar pattern.",
 gap:"pattern", trap:"a similar patten",
 why:"Lỗi chính tả hay gặp — pattern có hai chữ t. Cụm này rất hữu dụng khi mô tả biểu đồ."},

/* ─── 11 · SOURCE ──────────────────────────────────────────── */
{id:"b1-source-01", core:"source", band:"b1",
 chunk:"a reliable source", vi:"một nguồn đáng tin cậy",
 ex:"Always check that the information comes from a reliable source.",
 gap:"reliable", trap:"a reliable resource",
 why:"Source là nguồn thông tin; resource là tài nguyên, nguồn lực. Đừng nhầm hai từ này."},

{id:"b1-source-02", core:"source", band:"b1",
 chunk:"the main source of", vi:"nguồn chính của",
 ex:"Coal is still the main source of electricity in some countries.",
 gap:"source", trap:"the main source for",
 why:"Source luôn đi với of khi chỉ nguồn của cái gì."},

{id:"b1-source-03", core:"source", band:"b1",
 chunk:"natural resources", vi:"tài nguyên thiên nhiên",
 ex:"The country is rich in natural resources such as oil and gas.",
 gap:"resources", trap:"natural sources",
 why:"Dầu, khí, khoáng sản là resources (tài nguyên). Đây là cặp bẫy ngược lại của cụm phía trên."},

{id:"b1-source-04", core:"source", band:"b1",
 chunk:"a source of information", vi:"một nguồn thông tin",
 ex:"For many young people, social media is their main source of information.",
 inEx:"source of information",
 gap:"information", trap:"a source of informations",
 why:"Information không đếm được, không bao giờ thêm s."},

/* ─── 12 · FACTOR ──────────────────────────────────────────── */
{id:"b1-factor-01", core:"factor", band:"b1",
 chunk:"a key factor", vi:"một yếu tố then chốt",
 ex:"Price is a key factor when people choose a smartphone.",
 gap:"factor", trap:"a key factory",
 why:"Factor là yếu tố, factory là nhà máy. Chỉ khác một chữ y nhưng sai là mất nghĩa hoàn toàn."},

{id:"b1-factor-02", core:"factor", band:"b1",
 chunk:"an important factor", vi:"một yếu tố quan trọng",
 ex:"Family background is an important factor in a child's success.",
 gap:"an", trap:"a important factor",
 why:"Important bắt đầu bằng nguyên âm nên phải dùng an. Lỗi mạo từ này bị trừ điểm ở cả Writing lẫn Speaking."},

{id:"b1-factor-03", core:"factor", band:"b1",
 chunk:"several factors", vi:"một số yếu tố",
 ex:"Several factors explain why the population fell.",
 gap:"factors", trap:"several factor",
 why:"Several luôn đi với danh từ số nhiều."},

{id:"b1-factor-04", core:"factor", band:"b1",
 chunk:"the main factor in", vi:"yếu tố chính trong",
 ex:"Cost was the main factor in their decision.",
 gap:"in", trap:"the main factor to",
 why:"Khi nói yếu tố chính dẫn tới một kết quả hoặc quyết định, dùng factor in."},

/* ─── 13 · METHOD ──────────────────────────────────────────── */
{id:"b1-method-01", core:"method", band:"b1",
 chunk:"an effective method", vi:"một phương pháp hiệu quả",
 ex:"Testing yourself is an effective method of learning vocabulary.",
 gap:"effective", trap:"an effect method",
 why:"Effect là danh từ (tác động), effective mới là tính từ (hiệu quả)."},

{id:"b1-method-02", core:"method", band:"b1",
 chunk:"traditional teaching methods", vi:"các phương pháp giảng dạy truyền thống",
 ex:"Some parents still prefer traditional teaching methods.",
 gap:"traditional", trap:"tradition teaching methods",
 why:"Tradition là danh từ, traditional là tính từ. Trước teaching methods cần tính từ."},

{id:"b1-method-03", core:"method", band:"b1",
 chunk:"a method of", vi:"một phương pháp để",
 ex:"Cycling is a cheap method of getting around the city.",
 inEx:"method of",
 gap:"of", trap:"a method to getting",
 why:"Sau method of luôn là V-ing. Nếu muốn dùng to thì phải là to + động từ nguyên mẫu, nhưng \"method of\" tự nhiên hơn nhiều."},

{id:"b1-method-04", core:"method", band:"b1",
 chunk:"use this method", vi:"sử dụng phương pháp này",
 ex:"Many schools now use this method to teach reading.",
 gap:"use", trap:"use in this method",
 why:"Use đi thẳng với tân ngữ, không có giới từ in."},

/* ─── 14 · PROCESS ─────────────────────────────────────────── */
{id:"b1-process-01", core:"process", band:"b1",
 chunk:"a slow process", vi:"một quá trình chậm",
 ex:"Recovering from the illness was a slow process.",
 gap:"slow", trap:"a slowly process",
 why:"Trước danh từ process cần tính từ slow, không dùng trạng từ slowly."},

{id:"b1-process-02", core:"process", band:"b1",
 chunk:"the learning process", vi:"quá trình học tập",
 ex:"Making mistakes is a normal part of the learning process.",
 gap:"learning", trap:"the learn process",
 why:"Ở vị trí này cần dạng V-ing learning làm định ngữ, không dùng động từ nguyên mẫu."},

{id:"b1-process-03", core:"process", band:"b1",
 chunk:"in the process of", vi:"đang trong quá trình",
 ex:"The company is in the process of moving to a new office.",
 gap:"process", trap:"in process of",
 why:"Cụm cố định phải có the. Sau cụm này luôn là V-ing."},

{id:"b1-process-04", core:"process", band:"b1",
 chunk:"speed up the process", vi:"đẩy nhanh quá trình",
 ex:"New software has helped speed up the process considerably.",
 gap:"speed", trap:"fast up the process",
 why:"Speed up là phrasal verb chuẩn. Không có cụm \"fast up\" trong tiếng Anh."},

/* ─── 15 · ROLE ────────────────────────────────────────────── */
{id:"b1-role-01", core:"role", band:"b1",
 chunk:"play an important role in", vi:"đóng vai trò quan trọng trong",
 ex:"Teachers play an important role in shaping young minds.",
 gap:"play", trap:"take an important role in",
 why:"Role đi với play. Đây là một trong những cụm dùng nhiều nhất trong Writing Task 2."},

{id:"b1-role-02", core:"role", band:"b1",
 chunk:"the role of", vi:"vai trò của",
 ex:"The article discusses the role of parents in early education.",
 gap:"role", trap:"the role for",
 why:"Role of somebody hoặc role in something. Không dùng \"role for\"."},

{id:"b1-role-03", core:"role", band:"b1",
 chunk:"take on a new role", vi:"đảm nhận một vai trò mới",
 ex:"After the promotion, she took on a new role in the finance team.",
 inEx:"took on a new role",
 gap:"take", trap:"take up a new role",
 why:"Take on là đảm nhận trách nhiệm mới. Take up thường dùng cho sở thích: take up a hobby."},

{id:"b1-role-04", core:"role", band:"b1",
 chunk:"a key role in", vi:"một vai trò then chốt trong",
 ex:"Technology has a key role in modern healthcare.",
 gap:"key", trap:"a key role at",
 why:"Role đi với in khi nói vai trò trong một lĩnh vực hoặc quá trình."}

]);
