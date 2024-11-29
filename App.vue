<script>
	export default {
		onLaunch: function() { 
			console.log('App Launch right now commit-test 3')
		},
		onShow: function() {
 
		},
		onHide: function() {
			console.log('App Hide')
		}
	} 
</script>

<style> 
	/*每个页面公共css */
	@import './common/fui-app.css';
	@import './components/firstui/fui-theme/fui-theme.css';
</style>
