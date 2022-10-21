'use strict';

const { Controller } = require('egg');
const fs = require('fs');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async upload() {
    const { ctx } = this;
    const { version, content } = ctx.request.body;
    const dir = `app/public/${version}`;
    console.log(content);
    console.log(`dir => ${dir}`);
    console.log('???', fs.existsSync(dir));
    const editContent = `(() => {${content}})();`;
    const bufferData = Buffer.from(editContent);
    const target = `${dir}/remote.js`;
    // 判断是否存在该文件夹，不存在则创建。
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    try {
      await fs.writeFileSync(target, bufferData);
      ctx.status = 200;
      ctx.body = {
        code: 0,
        msg: 'succeed',
      };
    } catch (e) {
      ctx.status = 500;
      ctx.body = { msg: '上传文件失败' };
    }

    ctx.body = {
      code: 0,
      msg: 'succeed',
    };
  }
}

module.exports = HomeController;
