import { Builder, By } from 'selenium-webdriver'

describe('card lp example', () => {
	let driver
	let fs = require('fs')

	beforeAll(() => {
		driver = new Builder().forBrowser('chrome').build()
	})

	afterAll(() => {
		driver.quit()
	})

	test('card lp page should work', async () => {
		await driver.get('https://zozo.jp/_card/')
	})

	test('card lp check ballon and screenshot', async () => {
		await driver.executeScript('window.scroll(0, 300);')
		const base64 = await driver.takeScreenshot()
		const buffer = Buffer.from(base64, 'base64')
		fs.writeFileSync('screenshot/screenshot.jpg', buffer)
		let element = await driver.findElement(
			By.className('p-card-application-balloon')
		)
		expect(element).toEqual(expect.anything())
	})
})
