import { stringify } from 'qs';
import request from '@/utils/request';

export async function getTalentList() {
    return request('/api/talentList');
}