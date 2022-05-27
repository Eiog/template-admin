import { mock, Random } from 'mockjs'
mock('/login', 'post', {
    "name": Random.cname()
})