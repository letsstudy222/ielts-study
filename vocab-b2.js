/* ══════════════════════════════════════════════════════════════
   BANDUP · vocab-b2.js · Lô cụm từ bậc BAND 5.0 → 5.5
   ──────────────────────────────────────────────────────────────
   15 từ hạt nhân AWL × 4 cụm = 60 cụm.
   Schema: xem chú thích đầy đủ trong vocab-b1.js
   Trọng tâm lô này: các cặp từ dễ nhầm gây mất điểm nhiều nhất
   (affect/effect · policy/police · reliant/reliable · raise/rise)
   ══════════════════════════════════════════════════════════════ */

window.BANDUP_VOCAB = (window.BANDUP_VOCAB || []).concat([

/* ─── 01 · APPROACH ────────────────────────────────────────── */
{id:"b2-approach-01", core:"approach", band:"b2",
 chunk:"a new approach to", vi:"một cách tiếp cận mới đối với",
 ex:"The school has adopted a new approach to teaching mathematics.",
 gap:"approach", trap:"a new approach for",
 why:"Approach (danh từ) luôn đi với to. Sau to là danh từ hoặc V-ing, không phải động từ nguyên mẫu."},

{id:"b2-approach-02", core:"approach", band:"b2",
 chunk:"take a different approach", vi:"áp dụng một cách làm khác",
 ex:"When the first plan failed, the team took a different approach.",
 inEx:"took a different approach",
 gap:"take", trap:"make a different approach",
 why:"Approach đi với take hoặc adopt, không đi với make."},

{id:"b2-approach-03", core:"approach", band:"b2",
 chunk:"a practical approach", vi:"một cách tiếp cận thiết thực",
 ex:"What students need is a practical approach they can use immediately.",
 gap:"practical", trap:"a practice approach",
 why:"Practice là danh từ/động từ (luyện tập), practical mới là tính từ (thiết thực)."},

{id:"b2-approach-04", core:"approach", band:"b2",
 chunk:"approach the problem", vi:"tiếp cận vấn đề",
 ex:"Engineers approach the problem from a completely different angle.",
 gap:"approach", trap:"approach to the problem",
 why:"Khi approach là ĐỘNG TỪ thì đi thẳng với tân ngữ, không có to. Chỉ danh từ mới cần to."},

/* ─── 02 · IMPACT ──────────────────────────────────────────── */
{id:"b2-impact-01", core:"impact", band:"b2",
 chunk:"have a significant impact on", vi:"có tác động đáng kể đến",
 ex:"Social media has a significant impact on how teenagers see themselves.",
 inEx:"has a significant impact on",
 gap:"impact", trap:"have a significant impact to",
 why:"Impact luôn đi với on. Đây là cụm dùng được ở gần như mọi đề Writing Task 2."},

{id:"b2-impact-02", core:"impact", band:"b2",
 chunk:"the impact of", vi:"tác động của",
 ex:"Scientists are studying the impact of rising temperatures on crops.",
 gap:"impact", trap:"the impact from",
 why:"Cấu trúc đầy đủ: the impact OF cái gì ON cái gì. Nhớ cả cặp of… on."},

{id:"b2-impact-03", core:"impact", band:"b2",
 chunk:"a positive impact", vi:"một tác động tích cực",
 ex:"Volunteering had a positive impact on her confidence.",
 gap:"positive", trap:"a positive impaction",
 why:"Không có từ impaction trong nghĩa này. Danh từ đúng là impact."},

{id:"b2-impact-04", core:"impact", band:"b2",
 chunk:"minimise the impact", vi:"giảm thiểu tác động",
 ex:"The company is trying to minimise the impact of the factory on local rivers.",
 gap:"minimise", trap:"minimum the impact",
 why:"Minimum là danh từ/tính từ, minimise mới là động từ. Người Mỹ viết minimize."},

/* ─── 03 · ISSUE ───────────────────────────────────────────── */
{id:"b2-issue-01", core:"issue", band:"b2",
 chunk:"address the issue", vi:"giải quyết vấn đề",
 ex:"The government has failed to address the issue of youth unemployment.",
 gap:"address", trap:"address to the issue",
 why:"Address ở đây là động từ nghĩa \"xử lý, giải quyết\", đi thẳng với tân ngữ, không có to."},

{id:"b2-issue-02", core:"issue", band:"b2",
 chunk:"a controversial issue", vi:"một vấn đề gây tranh cãi",
 ex:"Nuclear power remains a controversial issue in many countries.",
 gap:"controversial", trap:"a controversy issue",
 why:"Controversy là danh từ, controversial là tính từ. Trước danh từ issue cần tính từ."},

{id:"b2-issue-03", core:"issue", band:"b2",
 chunk:"raise an issue", vi:"nêu ra một vấn đề",
 ex:"Several parents raised an issue about the new timetable.",
 inEx:"raised an issue",
 gap:"raise", trap:"rise an issue",
 why:"Raise cần tân ngữ (nâng cái gì lên); rise không có tân ngữ (tự dâng lên). Prices rise, nhưng you raise a question."},

{id:"b2-issue-04", core:"issue", band:"b2",
 chunk:"social issues", vi:"các vấn đề xã hội",
 ex:"The documentary explores social issues such as poverty and crime.",
 gap:"social", trap:"society issues",
 why:"Society là danh từ, social là tính từ. So sánh: social media, social class, social problems."},

/* ─── 04 · POLICY ──────────────────────────────────────────── */
{id:"b2-policy-01", core:"policy", band:"b2",
 chunk:"introduce a new policy", vi:"đưa ra một chính sách mới",
 ex:"The city introduced a new policy to reduce plastic waste.",
 inEx:"introduced a new policy",
 gap:"policy", trap:"introduce a new politic",
 why:"Policy là chính sách; politics là chính trị; politician là chính trị gia. Ba từ hoàn toàn khác nhau."},

{id:"b2-policy-02", core:"policy", band:"b2",
 chunk:"change their policy", vi:"thay đổi chính sách của họ",
 ex:"After the protests, the company had to change their policy on working hours.",
 gap:"policy", trap:"change their police",
 why:"Police là cảnh sát. Đây là lỗi viết nhầm rất hay gặp và làm câu văn trở nên vô nghĩa."},

{id:"b2-policy-03", core:"policy", band:"b2",
 chunk:"a government policy on", vi:"một chính sách của chính phủ về",
 ex:"There is still no clear government policy on electric vehicles.",
 inEx:"government policy on",
 gap:"policy", trap:"a government policy about",
 why:"Chính sách VỀ một lĩnh vực dùng on, không dùng about. \"About\" nghe kém trang trọng."},

{id:"b2-policy-04", core:"policy", band:"b2",
 chunk:"policy makers", vi:"những người hoạch định chính sách",
 ex:"These findings should interest policy makers in the education sector.",
 gap:"makers", trap:"policy creators",
 why:"Cụm cố định là policy makers (hoặc policymakers viết liền). Không dùng creators."},

/* ─── 05 · AVAILABLE ───────────────────────────────────────── */
{id:"b2-available-01", core:"available", band:"b2",
 chunk:"widely available", vi:"có sẵn rộng rãi",
 ex:"Cheap smartphones are now widely available in rural areas.",
 gap:"widely", trap:"wide available",
 why:"Trước tính từ available cần trạng từ widely, không dùng tính từ wide."},

{id:"b2-available-02", core:"available", band:"b2",
 chunk:"readily available", vi:"sẵn có, dễ kiếm",
 ex:"Information that was once hard to find is now readily available online.",
 gap:"readily", trap:"ready available",
 why:"Readily là trạng từ (một cách dễ dàng), ready là tính từ (sẵn sàng)."},

{id:"b2-available-03", core:"available", band:"b2",
 chunk:"available to students", vi:"dành cho sinh viên",
 ex:"These scholarships are available to students from low-income families.",
 gap:"available", trap:"available with students",
 why:"Available TO người, available FOR việc gì. Không bao giờ dùng with."},

{id:"b2-available-04", core:"available", band:"b2",
 chunk:"make information available", vi:"công khai thông tin",
 ex:"Hospitals should make information available to patients in simple language.",
 gap:"available", trap:"make available information",
 why:"Trật tự đúng là make + tân ngữ + available. Đảo lại thành \"make available information\" là sai cấu trúc."},

/* ─── 06 · SIGNIFICANT ─────────────────────────────────────── */
{id:"b2-significant-01", core:"significant", band:"b2",
 chunk:"a significant increase in", vi:"một sự gia tăng đáng kể về",
 ex:"There was a significant increase in online sales last year.",
 gap:"increase", trap:"a significant increase of",
 why:"Increase/decrease đi với IN khi nói tăng về mặt nào. Cụm bắt buộc phải thuộc cho Writing Task 1."},

{id:"b2-significant-02", core:"significant", band:"b2",
 chunk:"significantly higher than", vi:"cao hơn đáng kể so với",
 ex:"Rents in the capital are significantly higher than in other cities.",
 gap:"significantly", trap:"significant higher than",
 why:"Trước tính từ so sánh higher cần trạng từ significantly."},

{id:"b2-significant-03", core:"significant", band:"b2",
 chunk:"a significant number of", vi:"một số lượng đáng kể",
 ex:"A significant number of graduates now work in a different field.",
 gap:"number", trap:"a significant amount of people",
 why:"Number of + danh từ đếm được (people, students); amount of + không đếm được (money, time)."},

{id:"b2-significant-04", core:"significant", band:"b2",
 chunk:"have a significant effect on", vi:"có ảnh hưởng đáng kể đến",
 ex:"Sleep has a significant effect on academic performance.",
 inEx:"has a significant effect on",
 gap:"effect", trap:"have a significant affect on",
 why:"Effect là DANH TỪ (ảnh hưởng), affect là ĐỘNG TỪ (ảnh hưởng đến). Sau mạo từ a phải là danh từ effect."},

/* ─── 07 · RELY ────────────────────────────────────────────── */
{id:"b2-rely-01", core:"rely", band:"b2",
 chunk:"rely heavily on", vi:"phụ thuộc nhiều vào",
 ex:"Many small towns rely heavily on tourism for jobs.",
 gap:"rely", trap:"rely heavily in",
 why:"Rely luôn đi với on. Tương tự: depend on, count on."},

{id:"b2-rely-02", core:"rely", band:"b2",
 chunk:"increasingly reliant on", vi:"ngày càng phụ thuộc vào",
 ex:"Modern farming is increasingly reliant on machinery.",
 gap:"reliant", trap:"increasingly reliable on",
 why:"Reliant = phụ thuộc; reliable = đáng tin cậy. Hai từ nghĩa gần như trái ngược trong câu này."},

{id:"b2-rely-03", core:"rely", band:"b2",
 chunk:"our reliance on", vi:"sự phụ thuộc của chúng ta vào",
 ex:"We must reduce our reliance on fossil fuels.",
 gap:"reliance", trap:"our reliant on",
 why:"Sau tính từ sở hữu our cần DANH TỪ reliance, không phải tính từ reliant."},

{id:"b2-rely-04", core:"rely", band:"b2",
 chunk:"cannot rely on", vi:"không thể trông cậy vào",
 ex:"Farmers cannot rely on rainfall alone during the dry season.",
 gap:"rely", trap:"cannot rely at",
 why:"Không bao giờ dùng at với rely. Chỉ có on."},

/* ─── 08 · ACCESS ──────────────────────────────────────────── */
{id:"b2-access-01", core:"access", band:"b2",
 chunk:"have access to", vi:"được tiếp cận với",
 ex:"Millions of children still do not have access to clean water.",
 gap:"access", trap:"have access with",
 why:"Access (danh từ) luôn đi với to. Đây là một trong những cụm hay dùng nhất khi bàn về giáo dục và y tế."},

{id:"b2-access-02", core:"access", band:"b2",
 chunk:"gain access to", vi:"giành được quyền tiếp cận",
 ex:"Only registered members can gain access to the full database.",
 gap:"gain", trap:"gain access into",
 why:"Vẫn là to, không phải into. Động từ đi kèm thường là have, gain, get hoặc provide."},

{id:"b2-access-03", core:"access", band:"b2",
 chunk:"easy access to", vi:"sự tiếp cận dễ dàng với",
 ex:"The flat is popular because of its easy access to the metro.",
 gap:"easy", trap:"easily access to",
 why:"Trước danh từ access cần tính từ easy, không dùng trạng từ easily."},

{id:"b2-access-04", core:"access", band:"b2",
 chunk:"access the internet", vi:"truy cập internet",
 ex:"Students can access the internet free of charge in the library.",
 gap:"access", trap:"access to the internet",
 why:"Khi access là ĐỘNG TỪ thì bỏ to. Giống hệt trường hợp approach ở chùm đầu tiên."},

/* ─── 09 · ACHIEVE ─────────────────────────────────────────── */
{id:"b2-achieve-01", core:"achieve", band:"b2",
 chunk:"achieve a goal", vi:"đạt được mục tiêu",
 ex:"Setting small steps helps you achieve a goal that feels impossible.",
 gap:"achieve", trap:"achieve to a goal",
 why:"Achieve đi thẳng với tân ngữ, không có giới từ to."},

{id:"b2-achieve-02", core:"achieve", band:"b2",
 chunk:"achieve better results", vi:"đạt kết quả tốt hơn",
 ex:"Students who sleep well achieve better results in exams.",
 gap:"results", trap:"achieve better result",
 why:"Result đếm được, nói chung chung phải dùng số nhiều results."},

{id:"b2-achieve-03", core:"achieve", band:"b2",
 chunk:"a major achievement", vi:"một thành tựu lớn",
 ex:"Finishing the marathon was a major achievement for him.",
 gap:"achievement", trap:"a major achieve",
 why:"Achieve là động từ; danh từ phải là achievement."},

{id:"b2-achieve-04", core:"achieve", band:"b2",
 chunk:"achieve a balance between", vi:"đạt được sự cân bằng giữa",
 ex:"It is hard to achieve a balance between work and family life.",
 gap:"between", trap:"achieve a balance among",
 why:"Between dùng khi có hai vế rõ ràng. Among dùng cho ba thứ trở lên không tách bạch."},

/* ─── 10 · AFFECT ──────────────────────────────────────────── */
{id:"b2-affect-01", core:"affect", band:"b2",
 chunk:"directly affect", vi:"ảnh hưởng trực tiếp đến",
 ex:"Changes in interest rates directly affect house prices.",
 gap:"affect", trap:"directly effect",
 why:"Affect là động từ, effect là danh từ. Sau trạng từ directly cần động từ affect."},

{id:"b2-affect-02", core:"affect", band:"b2",
 chunk:"badly affected by", vi:"bị ảnh hưởng nặng nề bởi",
 ex:"Coastal villages were badly affected by the storm.",
 gap:"affected", trap:"badly affect by",
 why:"Câu bị động cần dạng quá khứ phân từ affected, không dùng nguyên mẫu affect."},

{id:"b2-affect-03", core:"affect", band:"b2",
 chunk:"affect people's health", vi:"ảnh hưởng đến sức khoẻ của người dân",
 ex:"Long working hours can affect people's health in serious ways.",
 gap:"affect", trap:"affect to people's health",
 why:"Affect không bao giờ có to đi kèm. Nếu muốn dùng to thì phải đổi sang have an effect ON."},

{id:"b2-affect-04", core:"affect", band:"b2",
 chunk:"adversely affect", vi:"tác động xấu đến",
 ex:"Noise from the airport adversely affects nearby residents.",
 inEx:"adversely affects",
 gap:"adversely", trap:"adverse affect",
 why:"Adverse là tính từ, adversely là trạng từ. Trước động từ affect cần trạng từ."},

/* ─── 11 · INVOLVE ─────────────────────────────────────────── */
{id:"b2-involve-01", core:"involve", band:"b2",
 chunk:"be involved in", vi:"tham gia vào, dính líu đến",
 ex:"More than fifty volunteers were involved in the project.",
 inEx:"were involved in",
 gap:"involved", trap:"be involved on",
 why:"Involved luôn đi với in khi nói tham gia vào một hoạt động."},

{id:"b2-involve-02", core:"involve", band:"b2",
 chunk:"get involved in", vi:"tham gia vào",
 ex:"She wanted to get involved in local politics after university.",
 gap:"involved", trap:"get involve in",
 why:"Sau get phải là dạng phân từ involved, không dùng nguyên mẫu involve."},

{id:"b2-involve-03", core:"involve", band:"b2",
 chunk:"involve making decisions", vi:"bao gồm việc ra quyết định",
 ex:"The job involves making decisions under pressure.",
 inEx:"involves making decisions",
 gap:"making", trap:"involve to make decisions",
 why:"Sau involve luôn là V-ing, không bao giờ là to + động từ."},

{id:"b2-involve-04", core:"involve", band:"b2",
 chunk:"involve a lot of work", vi:"đòi hỏi rất nhiều công sức",
 ex:"Organising the festival involved a lot of work behind the scenes.",
 inEx:"involved a lot of work",
 gap:"involve", trap:"involve to a lot of work",
 why:"Involve đi thẳng với tân ngữ, không có giới từ."},

/* ─── 12 · POTENTIAL ───────────────────────────────────────── */
{id:"b2-potential-01", core:"potential", band:"b2",
 chunk:"have the potential to", vi:"có tiềm năng để",
 ex:"Solar power has the potential to supply most of our electricity.",
 inEx:"has the potential to",
 gap:"potential", trap:"have the potential for do",
 why:"Sau the potential dùng to + động từ nguyên mẫu, hoặc for + danh từ. Không trộn hai cấu trúc."},

{id:"b2-potential-02", core:"potential", band:"b2",
 chunk:"potential benefits", vi:"những lợi ích tiềm năng",
 ex:"The report lists the potential benefits of a four-day week.",
 gap:"potential", trap:"potentially benefits",
 why:"Trước danh từ benefits cần tính từ potential, không dùng trạng từ potentially."},

{id:"b2-potential-03", core:"potential", band:"b2",
 chunk:"reach their full potential", vi:"phát huy hết tiềm năng của mình",
 ex:"Good teachers help every child reach their full potential.",
 gap:"potential", trap:"reach their full potentially",
 why:"Ở đây potential là danh từ. Potentially là trạng từ, không đứng sau full được."},

{id:"b2-potential-04", core:"potential", band:"b2",
 chunk:"a potential problem", vi:"một vấn đề có thể xảy ra",
 ex:"Engineers spotted a potential problem before the bridge opened.",
 gap:"problem", trap:"a potential problems",
 why:"Mạo từ a luôn đi với danh từ số ít."},

/* ─── 13 · CONTRIBUTE ──────────────────────────────────────── */
{id:"b2-contribute-01", core:"contribute", band:"b2",
 chunk:"contribute to", vi:"góp phần vào",
 ex:"Regular exercise contributes to better mental health.",
 inEx:"contributes to",
 gap:"contribute", trap:"contribute for",
 why:"Contribute luôn đi với to. Sau to là danh từ hoặc V-ing."},

{id:"b2-contribute-02", core:"contribute", band:"b2",
 chunk:"make a contribution to", vi:"đóng góp vào",
 ex:"Immigrants make a valuable contribution to the economy.",
 inEx:"make a valuable contribution to",
 gap:"contribution", trap:"make a contribution for",
 why:"Dạng danh từ contribution cũng đi với to. Động từ đi kèm là make, không phải do."},

{id:"b2-contribute-03", core:"contribute", band:"b2",
 chunk:"contribute significantly to", vi:"đóng góp đáng kể vào",
 ex:"Cars contribute significantly to air pollution in cities.",
 gap:"significantly", trap:"contribute significant to",
 why:"Sau động từ contribute cần trạng từ significantly."},

{id:"b2-contribute-04", core:"contribute", band:"b2",
 chunk:"a major contributor to", vi:"một tác nhân chính gây ra",
 ex:"Agriculture is a major contributor to water shortages.",
 gap:"contributor", trap:"a major contribute to",
 why:"Sau mạo từ a cần danh từ chỉ người/vật là contributor, không dùng động từ contribute."},

/* ─── 14 · DEMAND ──────────────────────────────────────────── */
{id:"b2-demand-01", core:"demand", band:"b2",
 chunk:"meet the demand for", vi:"đáp ứng nhu cầu về",
 ex:"The city cannot meet the demand for affordable housing.",
 gap:"meet", trap:"meet the demand to",
 why:"Demand đi với for. Động từ đi kèm là meet (đáp ứng), giống meet the requirements."},

{id:"b2-demand-02", core:"demand", band:"b2",
 chunk:"growing demand for", vi:"nhu cầu ngày càng tăng về",
 ex:"There is growing demand for plant-based food in supermarkets.",
 gap:"growing", trap:"growing demand of",
 why:"Luôn là demand FOR something. Đây là lỗi giới từ hay gặp nhất với từ này."},

{id:"b2-demand-03", core:"demand", band:"b2",
 chunk:"in high demand", vi:"được săn đón, cầu cao",
 ex:"Nurses with strong language skills are in high demand overseas.",
 gap:"demand", trap:"in high demanding",
 why:"Ở đây demand là danh từ. Demanding là tính từ nghĩa \"đòi hỏi cao\", nghĩa khác hẳn."},

{id:"b2-demand-04", core:"demand", band:"b2",
 chunk:"supply and demand", vi:"cung và cầu",
 ex:"Prices are decided by simple supply and demand.",
 gap:"supply", trap:"demand and supply",
 why:"Cụm cố định luôn theo thứ tự supply and demand. Đảo lại nghe rất lạ tai."},

/* ─── 15 · RANGE ───────────────────────────────────────────── */
{id:"b2-range-01", core:"range", band:"b2",
 chunk:"a wide range of", vi:"một loạt, rất nhiều loại",
 ex:"The course attracts students from a wide range of backgrounds.",
 gap:"range", trap:"a wide range for",
 why:"Luôn là range OF. Cụm này thay được cho \"many\" và nghe học thuật hơn hẳn."},

{id:"b2-range-02", core:"range", band:"b2",
 chunk:"range from", vi:"dao động từ",
 ex:"Ticket prices range from ten to forty pounds.",
 gap:"range", trap:"range between ten to forty",
 why:"Cặp cố định là range FROM… TO…. Nếu dùng between thì phải là between… AND…."},

{id:"b2-range-03", core:"range", band:"b2",
 chunk:"a range of options", vi:"một loạt lựa chọn",
 ex:"Customers are offered a range of options at different prices.",
 gap:"options", trap:"a range of option",
 why:"Sau a range of luôn là danh từ số nhiều."},

{id:"b2-range-04", core:"range", band:"b2",
 chunk:"the age range", vi:"độ tuổi, khoảng tuổi",
 ex:"The survey covered the age range from 18 to 35.",
 gap:"age", trap:"the ages range",
 why:"Danh từ age đứng trước làm định ngữ thì để số ít. So sánh: the price range, a five-year plan."}

]);
