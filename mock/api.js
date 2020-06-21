import mockjs from 'mockjs';

const getFlowerList = (req, res) => {
  const dataSource = mockjs.mock({
    'list|100': [
      {
        'scholar_id|+1': 1000,
        scholar_portrait_url: mockjs.Random.image('100x100'),
        'flower_num|1-1000': 1,
        'record_type|1': [0, 1],
        scholar_name() {
          return mockjs.Random.cname();
        },
        reason() {
          if (this.record_type === 0) {
            return Math.random() * 10 > 5 ? '专属余额充值30000' : '通用余额充值30000';
          }
          return '';
        },
        gmt_create() {
          return new Date(mockjs.Random.datetime()).getTime();
        },
      },
    ],
  });

  const result = {
    success: true,
    code: 0,
    msg: null,
    data: dataSource.list,
  };

  return res.json(result);
};

const getFlowerRank = (req, res) => {
  const dataSource = mockjs.mock({
    'list|100': [
      {
        'scholar_id|+1': 50000,
        scholar_name() {
          return mockjs.Random.cname();
        },
        scholar_portrait_url: mockjs.Random.image('100x100'),
        'flower_num|1-100': 1,
        'subject|1': ['数学', '语文'],
        'grade|1': ['小学', '初中', '高中'],
      },
    ],
  });
  const result = {
    success: true,
    code: 0,
    msg: null,
    data: dataSource.list,
  };
  return res.json(result);
};

const getFlowerRemain = (req, res) => {
  const dataSource = mockjs.mock({
    'remain_num|1-10': 1,
    'give_num|1-100': 1,
  });
  const result = {
    success: true,
    code: 0,
    msg: null,
    data: dataSource,
  };
  return res.json(result);
};

const getFlowerReceive = (req, res) => {
  const dataSource = mockjs.mock({
    'receive_num|1-100': 1,
    'rank|1-100': 1,
    scholar_info: {
      'id|50000-1000000': 1,
      portraitUrl: mockjs.Random.image('100x100'),
      nickName() {
        return mockjs.Random.cname();
      },
      'subjectId|1': [1, 2],
      'subject|1': ['数学', '语文'],
      'grade|1': ['小学', '初中', '高中'],
    },
  });
  const result = {
    success: true,
    code: 0,
    msg: null,
    data: dataSource,
  };
  return res.json(result);
};

const getTeachers = (req, res) => {
  const dataSource = {
    success: true,
    code: 0,
    msg: null,
    data: {
      total: 5,
      list: [
        {
          scholarId: 52105,
          nickName: '李老师',
          portraitUrl:
            'http://pt-img.jiayouxueba.com/and_baf58aed1e4e3c65a3d3640cf824c357_portrait_n0leq',
          priceOnline: 0.2,
          priceOffline: null,
          subjects: ['数学'],
          subjectIds: [373],
          gradeIds: [360, 361, 362, 363, 364, 365],
          showTags: [],
          studentNum: 3,
          score: 5.0,
          currentStatus: 0,
          teachAge: null,
          gradeId: 360,
          gradeName: '一年级',
          teacherRemarkName: '李老师',
          mobile: '15638200343',
          accid: 'nqelc@52105_s',
          relBalance: 10000.0,
          hasRelation: null,
          tagList: null,
          occupyId: null,
          occupy: null,
          totalTeach: null,
          teachingExperience: null,
        },
        {
          scholarId: 23080,
          nickName: '晓莉老师',
          portraitUrl:
            'http://7xlk4q.com2.z0.glb.qiniucdn.com/and_32a611b09505348f861917e3f3be35e6_portrait_1vxoq',
          priceOnline: 10,
          priceOffline: null,
          subjects: ['数学'],
          subjectIds: [373],
          gradeIds: [366, 367, 368],
          showTags: ['认真负责', '1年教龄'],
          studentNum: 14,
          score: 5,
          currentStatus: 0,
          teachAge: 1,
          gradeId: 366,
          gradeName: '初一',
          teacherRemarkName: '晓莉老师',
          mobile: '13967197743',
          accid: 'qclrk@23080_s',
          relBalance: 59989,
          hasRelation: null,
          tagList: null,
          occupyId: null,
          occupy: null,
        },
        {
          scholarId: 22382,
          nickName: '石四老师',
          portraitUrl:
            'http://7xlk4q.com2.z0.glb.qiniucdn.com/and_d2cb58e30142342797c8b7efd5b851a6_portrait_awen8',
          priceOnline: 1.4,
          priceOffline: null,
          subjects: ['奥数'],
          subjectIds: [774],
          gradeIds: [366, 367, 368],
          showTags: ['2年教龄'],
          studentNum: 32,
          score: 5,
          currentStatus: 0,
          teachAge: 2,
          gradeId: 366,
          gradeName: '初一',
          teacherRemarkName: '石四老师',
          mobile: '16100000004',
          accid: 'vlryo@22382_s',
          relBalance: 0,
          hasRelation: null,
          tagList: null,
          occupyId: null,
          occupy: null,
        },
        {
          scholarId: 22384,
          nickName: '石六老师',
          portraitUrl:
            'http://7xlk4q.com2.z0.glb.qiniucdn.com/and_d2cb58e30142342797c8b7efd5b851a6_portrait_awen8',
          priceOnline: 1.4,
          priceOffline: null,
          subjects: ['奥数'],
          subjectIds: [774],
          gradeIds: [366, 367, 368],
          showTags: ['2年教龄'],
          studentNum: 16,
          score: 5,
          currentStatus: 0,
          teachAge: 2,
          gradeId: 366,
          gradeName: '初一',
          teacherRemarkName: '石六老师',
          mobile: '16100000006',
          accid: 'ilqru@22384_s',
          relBalance: 0,
          hasRelation: null,
          tagList: null,
          occupyId: null,
          occupy: null,
        },
        {
          scholarId: 50102,
          nickName: 'nicky老师',
          portraitUrl:
            'http://pt-img.jiayouxueba.com/and_246f515817583008b1bdc1178bfe7fc9_portrait_h0klx',
          priceOnline: 0.9,
          priceOffline: null,
          subjects: ['数学'],
          subjectIds: [373],
          gradeIds: [360, 361, 362, 363, 364, 365],
          showTags: ['1年教龄'],
          studentNum: 5,
          score: 5.2,
          currentStatus: 0,
          teachAge: 1,
          gradeId: 360,
          gradeName: '一年级',
          teacherRemarkName: 'nicky老师',
          mobile: '15868199874',
          accid: 'chmur@50102_s',
          relBalance: 0,
          hasRelation: null,
          tagList: null,
          occupyId: null,
          occupy: null,
        },
        {
          scholarId: 50101,
          nickName: '试用试用啊老师',
          portraitUrl:
            'http://pt-img.jiayouxueba.com/and_343c1acde6b732c5ad949cbfb5826a09_portrait_jwaqq',
          priceOnline: 1,
          priceOffline: null,
          subjects: ['数学'],
          subjectIds: [373],
          gradeIds: [366, 367, 368],
          showTags: [
            '认真负责',
            '提分快效果明显',
            '培养高分学员',
            '经验丰富',
            '全国数学联赛获奖',
            '名校学霸',
            '名校毕业',
            '中考出题经验',
            '中考阅卷经验',
            '高考出题经验',
            '1年教龄',
          ],
          studentNum: 10,
          score: 5,
          currentStatus: 0,
          teachAge: 1,
          gradeId: 366,
          gradeName: '初一',
          teacherRemarkName: '试用试用啊老师',
          mobile: '15958184454',
          accid: 'iwxbq@50101_s',
          relBalance: 62767.35,
          hasRelation: null,
          tagList: null,
          occupyId: null,
          occupy: null,
        },
      ],
    },
  };

  return res.json(dataSource);
};

export default {
  'GET /jyxb-activity/external/flower/list': getFlowerList,
  'GET /jyxb-activity/external/flower/rank': getFlowerRank,
  'GET /jyxb-activity/external/flower/remain': getFlowerRemain,
  'GET /jyxb-activity/external/flower/receive': getFlowerReceive,
  'GET /api/v3/relation/teachers': getTeachers,
  'POST /jyxb-activity/external/flower/give/:scholarId': (req, res) => {
    res.send({
      success: true,
      code: 0,
      msg: null,
      data: {},
    });
  },
  'POST /api/member/external/student/signin': (req, res) => {
    res.send({
      success: true,
      code: 0,
      msg: null,
      data: {
        token: mockjs.Random.guid(),
      },
    });
  },
  'POST /uc/external/verification/preview/': (req, res) => {
    res.send({
      success: true,
      code: 0,
      msg: null,
      data: {
        success: true,
        id: mockjs.Random.id(),
        challenge: mockjs.Random.guid(),
        gt: mockjs.Random.guid(),
      },
    });
  },
  'GET /api/v3/sms/vcode/': (req, res) => {
    res.send({
      success: true,
      code: 0,
      msg: null,
      data: {},
    });
  },
};
