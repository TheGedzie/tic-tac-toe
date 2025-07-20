import {render_start} from './scripts/render_start/start.js'
import {renderField} from './scripts/render__field/render_field.js'

const button = await render_start()

function main(){
    button.addEventListener('click', () => {
    document.body.innerHTML = ''

    renderField()
    })
}

main()
