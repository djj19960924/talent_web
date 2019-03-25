// mock talentList
let talent = [];
function talentList(){
  for (let i = 0; i < 46; i += 1) {
    talent.push({
      id: i,
      name: '张晓明',
      sex:1,
      birth:'1993-10-16',
      political: '党员',
      education: '专科',
      school:'南京大学',
      profession: '电子商务',
      employer:'无锡跑吧',
      talentCategory: '专业技术人才',
    });
  }
  return talent
}
export default {
  'GET /api/talentList': talentList,
};
