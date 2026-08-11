/* ══════════════════════════════════════════════════════════════
   BANDUP · rd-set-01.js · Lô bài luyện Reading số 1
   ──────────────────────────────────────────────────────────────
   Gồm 2 bài:
     rd-set-b1-01 · bậc 4.0→5.0 · 340 từ · 10 câu · 12 phút
     rd-set-b2-01 · bậc 5.0→5.5 · 520 từ · 12 câu · 18 phút
   Toàn bộ văn bản tiếng Anh là NGUYÊN BẢN tự soạn cho BandUp,
   không trích từ đề thi thật.
   LƯU Ý KỸ THUẬT: trường "ev" phải là chuỗi con xuất hiện NGUYÊN
   VĂN trong passage thì nút "Xem trong bài" mới tô sáng được.
   ══════════════════════════════════════════════════════════════ */

window.BANDUP_READING = (window.BANDUP_READING || []).concat([

/* ══════════════════════════════════════════════════════════════
   BÀI 1 · BẬC 4.0 → 5.0
   ══════════════════════════════════════════════════════════════ */
{
  id: "rd-set-b1-01",
  band: "b1",
  title: "Thư viện di động ở vùng nông thôn",
  topic: "The Mobile Library",
  words: 278,
  minutes: 12,
  intro: "Bài ngắn, câu đơn giản. Luyện ba kỹ thuật lõi: scanning theo mỏ neo số và tên riêng, nhận diện paraphrase, và phân biệt False với Not Given.",
  passage: [
    {text: "In many rural parts of the world, the nearest library can be more than an hour away by bus. For families without a car, borrowing a book becomes a whole day's journey. Mobile libraries were created to solve exactly this problem."},
    {text: "A mobile library is simply a large vehicle filled with shelves. It travels between villages on a fixed timetable, stopping in each place for two or three hours. The first service of this kind began in England in 1857, using a horse and cart. Today most mobile libraries are buses, and a typical one carries around 3,000 books."},
    {text: "The service in Greenfield County is a good example. Its single bus visits eleven villages every fortnight, and it is driven by Anna Ferreira, who is also the librarian. Readers can borrow up to six items at a time and keep them until the bus returns. Anna says the most popular items are not novels but large-print books and children's picture books."},
    {text: "Mobile libraries do more than lend books. In Greenfield, the bus has become a small community centre. Older readers arrive early to talk to each other, and parents use the free internet connection to fill in official forms. Anna keeps a list of requests in a notebook and tries to bring the right title on her next visit."},
    {text: "The service is not without difficulties. Fuel and repairs are expensive, and the county cut the budget twice in the last five years. Two of the original three buses have already been sold. However, when the council suggested closing the service completely in 2021, more than four thousand residents signed a letter of protest, and the plan was dropped."}
  ],
  questions: [
    { type:"gap", limit:"ONE WORD ONLY",
      q:"The first mobile library service used a horse and ______ instead of a vehicle.",
      a:["cart"],
      ev:"using a horse and cart",
      why:"Mỏ neo để scan là năm 1857. Câu chứa đáp án nằm ngay sau mốc năm đó. Chỗ trống đứng sau \"and\" nên cần một danh từ song song với \"horse\"." },

    { type:"gap", limit:"ONE WORD AND/OR A NUMBER",
      q:"A typical mobile library today holds about ______ books.",
      a:["3,000","3000","three thousand"],
      ev:"a typical one carries around 3,000 books",
      why:"\"Holds\" trong câu hỏi là paraphrase của \"carries\" trong bài, còn \"about\" là paraphrase của \"around\". Đây đúng kiểu tầng 1 mà bạn đã học ở bài rd-b1-04." },

    { type:"gap", limit:"ONE WORD AND/OR A NUMBER",
      q:"The Greenfield bus visits ______ villages.",
      a:["eleven","11"],
      ev:"visits eleven villages every fortnight",
      why:"Số viết chữ hay viết số đều được chấp nhận. Cẩn thận đừng nhặt nhầm con số 3,000 hay 2021 ở đoạn khác — hãy bám đúng từ khoá \"villages\"." },

    { type:"gap", limit:"ONE WORD ONLY",
      q:"Readers in Greenfield may borrow a maximum of ______ items.",
      a:["six","6"],
      ev:"borrow up to six items at a time",
      why:"\"A maximum of\" là paraphrase của \"up to\". Nhận ra cặp này là bạn khoanh vùng được ngay câu chứa đáp án." },

    { type:"tfng",
      q:"Mobile libraries were invented in the twentieth century.",
      a:"FALSE",
      ev:"began in England in 1857",
      why:"Bài ghi rõ năm 1857, tức thế kỷ 19. Câu hỏi nói thế kỷ 20 nên MÂU THUẪN trực tiếp với bài → FALSE, không phải NOT GIVEN. Có thông tin để bác bỏ thì luôn là FALSE." },

    { type:"tfng",
      q:"Novels are the items borrowed most often in Greenfield.",
      a:"FALSE",
      ev:"the most popular items are not novels but large-print books",
      why:"Bài nói thẳng \"not novels but…\", tức phủ định đúng điều câu hỏi khẳng định. Đây là bẫy dành cho người chỉ scan thấy chữ \"novels\" rồi vội chọn TRUE." },

    { type:"tfng",
      q:"Anna Ferreira has worked as a librarian for more than ten years.",
      a:"NOT GIVEN",
      ev:"driven by Anna Ferreira, who is also the librarian",
      why:"Bài có nhắc Anna và nghề của cô, nhưng KHÔNG hề nói cô làm bao lâu. Chủ đề xuất hiện nhưng khía cạnh cụ thể thì không → NOT GIVEN. Đây chính là bẫy mà bài rd-b2-01 đã cảnh báo." },

    { type:"tfng",
      q:"The county reduced the budget for the service more than once.",
      a:"TRUE",
      ev:"the county cut the budget twice in the last five years",
      why:"\"Twice\" tất nhiên là \"more than once\", và \"reduced\" = \"cut\". Câu đề diễn đạt mơ hồ hơn bài nhưng vẫn được bài xác nhận trọn vẹn → TRUE." },

    { type:"mcq",
      q:"According to the passage, the Greenfield bus has become important because",
      opts:[
        "it carries more books than other services",
        "it gives people a place to meet and get help",
        "it visits villages every day",
        "it is the oldest service in the country"
      ],
      a:1,
      ev:"the bus has become a small community centre",
      why:"Đáp án đúng là paraphrase của \"a small community centre\" cộng với các chi tiết trò chuyện và dùng internet. Ba phương án còn lại đều mượn từ có thật trong bài (books, visits villages, oldest) nhưng ghép sai ý — đúng kiểu bẫy \"mượn từ\" ở bài rd-b1-06." },

    { type:"mcq",
      q:"What happened when the council proposed closing the service?",
      opts:[
        "Two buses were sold immediately",
        "The budget was increased",
        "Local people objected in large numbers",
        "A new librarian was appointed"
      ],
      a:2,
      ev:"more than four thousand residents signed a letter of protest",
      why:"\"Objected in large numbers\" là paraphrase của \"more than four thousand residents signed a letter of protest\". Phương án A có thật trong bài nhưng xảy ra vì lý do khác (cắt ngân sách), không phải hệ quả của đề xuất đóng cửa — bẫy sai quan hệ nhân quả." }
  ]
},

/* ══════════════════════════════════════════════════════════════
   BÀI 2 · BẬC 5.0 → 5.5
   ══════════════════════════════════════════════════════════════ */
{
  id: "rd-set-b2-01",
  band: "b2",
  title: "Vì sao thành phố trồng cây",
  topic: "Why Cities Plant Trees",
  words: 497,
  minutes: 18,
  intro: "Bài dài hơn, có đoạn ghi nhãn A–E. Luyện Matching Information (dạng không theo thứ tự), True/False/Not Given ở mức tinh hơn, và Completion trong đoạn tóm tắt.",
  passage: [
    {label:"A", text:"For most of the twentieth century, street trees were treated as decoration. Planners chose them for their shape and their flowers, and they were among the first things removed when a road needed widening. That attitude has changed sharply in the past two decades, as evidence has grown that trees do measurable work for a city. Where planners once asked how much a row of trees would cost, they are now more likely to ask what it would cost to remove them."},
    {label:"B", text:"The clearest effect is on temperature. A street lined with mature trees can be up to five degrees cooler than an identical street without them, partly because of shade and partly because leaves release water vapour. In cities where summer heat now causes hundreds of deaths each year, this difference is no longer a matter of comfort. Hospitals in one European capital reported a noticeable fall in heat-related admissions after a large planting programme in the surrounding streets. The effect is strongest at night, when bare concrete continues to radiate the heat it absorbed during the day while shaded surfaces cool far more quickly."},
    {label:"C", text:"Trees also slow down rainwater. During heavy storms, drains in older cities are quickly overwhelmed, and the water has nowhere to go but into basements and underpasses. Leaves and roots intercept part of the rainfall and release it gradually, which reduces the peak load on the drainage system. Engineers in Portland calculated that the city's trees save roughly nine million dollars a year in drainage costs that would otherwise have to be built in concrete. Older neighbourhoods with wide verges benefit most, since there is room for roots to spread and for water to sink into the ground rather than run straight off the surface."},
    {label:"D", text:"There are less obvious benefits too. Streets with trees tend to have slower traffic, because drivers instinctively reduce speed on a road that feels enclosed. Property values rise, sometimes by several per cent. Studies of hospital patients have suggested that even a view of greenery from a window is associated with shorter recovery times, although researchers are careful to note that such studies cannot easily separate cause from effect. Wealthier streets tend to have both more trees and healthier residents, and untangling which came first is far from straightforward."},
    {label:"E", text:"None of this makes planting simple. A tree in a pavement grows in poor, compacted soil, surrounded by pipes and cables, and receives far less water than one in a park. Many die within a few years, and a dead tree costs money without delivering any of the benefits above. Cities that have succeeded tend to spend a large share of their budget not on planting but on the unglamorous work of watering, pruning and replacing losses in the first five years. Survival rates improve dramatically when a single named person is responsible for each street rather than a rotating contractor. As one city forester put it, the planting ceremony is the cheapest part of the job."}
  ],
  questions: [
    { type:"match", opts:["Đoạn A","Đoạn B","Đoạn C","Đoạn D","Đoạn E"],
      q:"Which paragraph contains a specific financial figure showing money saved?",
      a:"C",
      ev:"save roughly nine million dollars a year in drainage costs",
      why:"Đề hỏi \"a specific financial figure\" — hãy quét tìm con số kèm đơn vị tiền. Đoạn D cũng nói về giá trị bất động sản tăng nhưng không đưa con số cụ thể, nên không đạt yêu cầu \"specific figure\"." },

    { type:"match", opts:["Đoạn A","Đoạn B","Đoạn C","Đoạn D","Đoạn E"],
      q:"Which paragraph describes how attitudes towards street trees used to be different?",
      a:"A",
      ev:"street trees were treated as decoration",
      why:"Từ khoá chức năng là \"used to be different\" — tìm đoạn nói về quá khứ và sự thay đổi. Đoạn A mở bằng \"For most of the twentieth century\" và kết bằng \"That attitude has changed sharply\"." },

    { type:"match", opts:["Đoạn A","Đoạn B","Đoạn C","Đoạn D","Đoạn E"],
      q:"Which paragraph mentions the cost of keeping trees alive after planting?",
      a:"E",
      ev:"the unglamorous work of watering, pruning and replacing losses",
      why:"Đoạn E là đoạn duy nhất bàn về chi phí SAU khi trồng. Chú ý đoạn C cũng có chữ \"costs\" nhưng đó là chi phí thoát nước — bẫy trùng từ khoá." },

    { type:"match", opts:["Đoạn A","Đoạn B","Đoạn C","Đoạn D","Đoạn E"],
      q:"Which paragraph refers to a benefit that researchers are not fully confident about?",
      a:"D",
      ev:"cannot easily separate cause from effect",
      why:"Cụm \"not fully confident\" ứng với ngôn ngữ rào đón trong đoạn D: \"have suggested\" và \"researchers are careful to note\". Nhận ra hedging là kỹ năng của bài rd-b5-02." },

    { type:"tfng",
      q:"A street with mature trees may be several degrees cooler than one without.",
      a:"TRUE",
      ev:"can be up to five degrees cooler",
      why:"\"Several degrees\" khớp với \"up to five degrees\", và \"may be\" khớp với \"can be\". Cả hai vế đều được bài xác nhận nên là TRUE." },

    { type:"tfng",
      q:"Trees prevent flooding completely in older cities.",
      a:"FALSE",
      ev:"intercept part of the rainfall",
      why:"Bài chỉ nói cây giữ lại MỘT PHẦN lượng mưa và giảm tải đỉnh điểm, không nói ngăn ngập hoàn toàn. Từ cực đoan \"completely\" mâu thuẫn với \"part of\" → FALSE." },

    { type:"tfng",
      q:"Portland has more street trees than any other American city.",
      a:"NOT GIVEN",
      ev:"Engineers in Portland calculated",
      why:"Portland được nhắc tới, nhưng bài hoàn toàn không so sánh nó với các thành phố khác. Có tên riêng không có nghĩa là có thông tin so sánh — đây là bẫy NOT GIVEN kinh điển." },

    { type:"tfng",
      q:"Drivers tend to go more slowly on streets with trees.",
      a:"TRUE",
      ev:"drivers instinctively reduce speed",
      why:"\"Go more slowly\" là paraphrase trực tiếp của \"reduce speed\". Đây là câu dễ nhất trong nhóm, đừng để mất." },

    { type:"gap", limit:"ONE WORD ONLY",
      q:"Trees cool streets both by providing shade and by releasing water ______ from their leaves.",
      a:["vapour","vapor"],
      ev:"leaves release water vapour",
      why:"Chỗ trống đứng sau \"water\" nên cần danh từ tạo thành cụm \"water vapour\". Chấp nhận cả cách viết Mỹ là vapor." },

    { type:"gap", limit:"ONE WORD ONLY",
      q:"City trees grow in soil that is poor and ______, and they compete with pipes and cables.",
      a:["compacted"],
      ev:"poor, compacted soil",
      why:"Chép nguyên văn tính từ trong bài. Đây là loại câu kiểm tra bạn có đọc kỹ đoạn cuối không, vì nhiều người đã hết giờ trước khi tới đoạn E." },

    { type:"mcq",
      q:"What is the main point the city forester makes at the end of the passage?",
      opts:[
        "Planting ceremonies should be held more often",
        "The real expense comes after the trees are planted",
        "Cities should plant fewer but larger trees",
        "Trees in parks are healthier than trees in streets"
      ],
      a:1,
      ev:"the planting ceremony is the cheapest part of the job",
      why:"Câu nói của người quản lý cây có ý mỉa: lễ trồng cây là phần rẻ nhất, tức phần đắt nằm ở chăm sóc về sau. Phương án D là sự thật có trong đoạn E nhưng không phải điều người này muốn nhấn — bẫy \"đúng nhưng không trả lời câu hỏi\"." },

    { type:"mcq",
      q:"Which of the following best describes the writer's overall attitude to street trees?",
      opts:[
        "Enthusiastic but aware of the practical difficulties",
        "Doubtful about whether the benefits are real",
        "Opposed to spending public money on planting",
        "Neutral, simply listing facts without judgement"
      ],
      a:0,
      ev:"None of this makes planting simple",
      why:"Bốn đoạn đầu trình bày lợi ích rõ ràng, đoạn E mở bằng \"None of this makes planting simple\" — tức thừa nhận khó khăn mà không phủ nhận lợi ích. Phương án B quá tiêu cực, C không có căn cứ, D bỏ qua giọng đánh giá xuyên suốt bài." }
  ]
}

]);
