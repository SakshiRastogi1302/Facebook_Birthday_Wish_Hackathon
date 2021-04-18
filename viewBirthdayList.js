//To automate and test apps in headless Chrome, we require puppeteer
let puppeteer = require("puppeteer");

//To run other js file code in current js file, use require
let {createExcelExecutorFn} = require("./createExcelSheet");
let {email_or_phoneNo,password} = require("./facebookCredentials");

//Facebook Login Link
let facebookLink = "https://www.facebook.com/";


function viewBirthdayList() {
    console.log("BEGIN...");
    (async function () {
        try {
            let browserInstance = await puppeteer.launch({
                headless: true,
                defaultViewport: null,
                args: ["--start-maximized"]
            });

            await openFacebook(facebookLink, browserInstance, email_or_phoneNo, password);
        } catch (error) {
            console.log("ERROR => " + error);
        }

    })();


    async function openFacebook(facebookLink, browserInstance, email_or_phoneNo, password) {

        let newTab = await browserInstance.newPage();
        await newTab.goto(facebookLink);
        await newTab.waitForSelector("#email", {
            visible: true
        });
        await newTab.type("#email", email_or_phoneNo, {
            delay: 100
        });
        await newTab.waitForSelector("#pass", {
            visible: true
        });
        await newTab.type("#pass", password, {
            delay: 100
        });
        await newTab.click("button[name='login']");
        await newTab.waitForSelector("input[type='search']", {
            visible: true
        });
        await newTab.click("input[type='search']", {
            delay: 1000
        });
        await newTab.click("input[type='search']");
        await newTab.type("input[type='search']", "Birthdays", {
            delay: 200
        });
        await newTab.keyboard.down('Enter');
        await newTab.keyboard.up('Enter');

        await newTab.waitForTimeout(3000);
        await newTab.waitForSelector(".bp9cbjyn.j83agx80.taijpn5t.c4xchbtz.by2jbhx6.a0jftqn4 .a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5", {
            visible: true
        });
        await newTab.click(".bp9cbjyn.j83agx80.taijpn5t.c4xchbtz.by2jbhx6.a0jftqn4 .a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ltmttdrg.g0qnabr5");

        function consoleFn(sectionSelector) {

            let birthdayNameArr = document.querySelectorAll(sectionSelector);
            return birthdayNameArr.length;
        }
        await newTab.waitForTimeout(500);
        await newTab.waitForSelector("div[class='rq0escxv datstx6m k4urcfbm a8c37x1j']", {
            visible: true
        });
        let birthdayCount = await newTab.evaluate(consoleFn, "div[class='rq0escxv datstx6m k4urcfbm a8c37x1j']");
        let birthdayList = [];
        if (birthdayCount > 0) {
            console.log("Following is the list of name of your friends who have birthday today or in the recent past :-");
            let todayRecentBirthday = await newTab.evaluate(() => Array.from(document.querySelectorAll("span[class='d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y hnhda86s oo9gr5id hzawbc8m']"), e => e.textContent));
            await newTab.waitForTimeout(3000);
            let nameArrLinks = await newTab.evaluate(() => Array.from(document.querySelectorAll(".dati1w0a.qt6c0cv9.hv4rvrfc.jb3vyjys.b20td4e0 .i1fnvgqd.j83agx80 .oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8"), e => e.href));
            for (let i = 0; i < birthdayCount; i++) {
                let url = newTab.url();
                let nameArr = await newTab.evaluate(() => Array.from(document.querySelectorAll(".gmql0nx0.l94mrbxd.p1ri9a11.lzcic4wl.d2edcug0.hpfvmrgz .d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.lrazzd5p.oo9gr5id"), e => e.textContent));

                await newTab.goto(nameArrLinks[i]);
                await newTab.waitForSelector(".k4urcfbm.l9j0dhe7.datstx6m .do00u71z.l9j0dhe7.k4urcfbm", {
                    visible: true
                });
                await newTab.click(".k4urcfbm.l9j0dhe7.datstx6m .do00u71z.l9j0dhe7.k4urcfbm");
                await newTab.evaluate(() => {
                    window.scrollBy(0, window.innerHeight);
                });
                await newTab.waitForTimeout(5000);
                await newTab.waitForSelector(".l9j0dhe7.oqcyycmt.tkr6xdv7", {
                    visible: true
                });
                await newTab.click(".l9j0dhe7.oqcyycmt.tkr6xdv7");
                await newTab.waitForTimeout(5000);
                await newTab.waitForSelector("span[class='d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y knj5qynh oo9gr5id']", {
                    visible: true
                });
                let birthDate = await newTab.evaluate(() => Array.from(document.querySelectorAll("span[class='d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y knj5qynh oo9gr5id']"), e => e.textContent));
                await newTab.goBack(url);
                await newTab.waitForSelector(".dati1w0a.ihqw7lf3.hv4rvrfc.ecm0bbzt.i1fnvgqd.btwxx1t3.aovydwv3.du4w35lb.l9j0dhe7.hpfvmrgz.tgvbjcpo.kvgmc6g5.hcukyx3x.cxmmr5t8.oygrvhab.g5gj957u.buofh1pr.j83agx80.rq0escxv.auili1gw.ow4ym5g4", {
                    visible: true
                });
                await newTab.click(".dati1w0a.ihqw7lf3.hv4rvrfc.ecm0bbzt.i1fnvgqd.btwxx1t3.aovydwv3.du4w35lb.l9j0dhe7.hpfvmrgz.tgvbjcpo.kvgmc6g5.hcukyx3x.cxmmr5t8.oygrvhab.g5gj957u.buofh1pr.j83agx80.rq0escxv.auili1gw.ow4ym5g4");

                jsonContent = {
                    Name: nameArr[i],
                    BirthDate: birthDate[0],
                    TodayOrRecentBirthday: todayRecentBirthday[i]

                };


                birthdayList.push(jsonContent);




            }

            console.table(birthdayList);
            console.log("END...");


        } else {
            console.log("Thanks for visiting 😊!! Either none of your friends are having birthday today or you have wished all of them....");
            await newTab.close();
            console.log("END...");
        }

    }




}


module.exports = {
    viewBirthdayListFn: viewBirthdayList
}